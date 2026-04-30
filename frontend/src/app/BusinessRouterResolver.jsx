/**
 * BusinessRouterResolver.jsx
 *
 * Multi-tenant resolver — loads manifest for a given :businessSlug,
 * resolves the correct template, and renders it.
 *
 * Production hardening:
 *  - AbortError handled silently (React StrictMode safe)
 *  - setLoading(false) NEVER runs on abort (prevents null-business flash)
 *  - No console.log outside useEffect
 *  - All debug logs stripped in production via IS_DEV guard
 *  - Suspense boundary for lazy-loaded template components
 */

import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';

import { loadManifest } from '../core/manifest/manifestLoader';
import { getTemplate } from '../templates/templateRegistry';

// ── Production-safe logger ────────────────────────────────────────────────────
const IS_DEV = import.meta.env.DEV;
const dev = {
  log: (...a) => IS_DEV && console.log(...a),
  warn: (...a) => IS_DEV && console.warn(...a),
  error: (...a) => IS_DEV && console.error(...a),
};

// ── Status constants ──────────────────────────────────────────────────────────
const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  READY: 'ready',
  ERROR: 'error',
};

export default function BusinessRouterResolver() {
  const { businessSlug } = useParams();

  const [status, setStatus] = useState(STATUS.IDLE);
  const [business, setBusiness] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Track latest slug to guard against stale closures
  const slugRef = useRef(businessSlug);
  useEffect(() => {
    slugRef.current = businessSlug;
  }, [businessSlug]);

  useEffect(() => {
    if (!businessSlug) {
      setErrorMsg('No business slug found in URL.');
      setStatus(STATUS.ERROR);
      return;
    }

    const currentSlug = businessSlug;

    slugRef.current = currentSlug;

    setStatus(STATUS.LOADING);
    setErrorMsg(null);
    setBusiness(null);

    async function fetchManifest() {
      try {
        dev.log('[Resolver] Starting manifest load for:', currentSlug);

        const manifest = await loadManifest(currentSlug);

        // null = loader swallowed an AbortError cleanly.
        // If we hit this now (rare), just bail.
        if (manifest === null) {
          dev.log('[Resolver] Fetch aborted (null return), skipping state update.');
          return;
        }

        if (slugRef.current !== currentSlug) return;

        if (typeof manifest !== 'object') {
          throw new Error('Manifest returned invalid data.');
        }

        setBusiness(manifest);
        setStatus(STATUS.READY);

      } catch (err) {
        if (err.name === 'AbortError') {
          dev.log('[Resolver] Fetch aborted for:', currentSlug);
          return;
        }

        dev.error('[Resolver] Manifest load failed:', err.message);

        setErrorMsg(err.message || 'Failed to load business data.');
        setStatus(STATUS.ERROR);
      }
    }

    fetchManifest();

    return () => {
      // Cleanup: We no longer abort the global cache fetch.
      // The `slugRef.current !== currentSlug` check will prevent state updates if the user navigated away.
      dev.log('[Resolver] Cleanup for:', currentSlug);
    };
  }, [businessSlug]);

  // ── Loading ─────────────────────────────────────────────────────────────────
  if (status === STATUS.LOADING || status === STATUS.IDLE) {
    return <FullPageSpinner />;
  }

  // ── Error ───────────────────────────────────────────────────────────────────
  if (status === STATUS.ERROR) {
    return <FullPageError message={errorMsg} slug={businessSlug} />;
  }

  // ── Safety check (should never reach here in normal flow) ───────────────────
  if (!business || typeof business !== 'object') {
    dev.error('[Resolver] Safety check failed — business is null after READY status');
    return (
      <FullPageError
        message="Business data is missing or invalid."
        slug={businessSlug}
      />
    );
  }

  // ── Template resolution ─────────────────────────────────────────────────────
  const templateKey = business.template;
  const TemplateRouter = templateKey ? getTemplate(templateKey) : null;


  dev.log('[Resolver] Resolved template:', templateKey); // ✅ was: console.log (leaked to production)

  if (!TemplateRouter) {
    return (
      <FullPageError
        message={`Template "${templateKey}" is not registered.`}
        slug={businessSlug}
      />
    );
  }

  // ── Final render ────────────────────────────────────────────────────────────
  return (
    <Suspense fallback={<FullPageSpinner />}>
      <TemplateRouter business={business} />
    </Suspense>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   UI: Full-page Spinner
───────────────────────────────────────────────────────────────────────────── */
function FullPageSpinner() {
  return (
    <div style={styles.center} aria-label="Loading" role="status">
      <div style={styles.spinner} />
      <style>{`
        @keyframes _resolver_spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   UI: Full-page Error
───────────────────────────────────────────────────────────────────────────── */
function FullPageError({ message, slug }) {
  return (
    <div style={styles.errorWrapper} role="alert">
      <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>⚠️</div>
      <h2 style={styles.errorTitle}>Something went wrong</h2>
      {message && (
        <p style={styles.errorMessage}>{message}</p>
      )}
      {slug && (
        <p style={styles.errorSlug}>
          Slug: <code style={styles.errorCode}>{slug}</code>
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────────────────────────── */
const styles = {
  center: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
  },
  spinner: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: '4px solid #e5e7eb',
    borderTopColor: '#3b82f6',
    animation: '_resolver_spin 0.8s linear infinite',
  },
  errorWrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: '#f9fafb',
  },
  errorTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#111827',
    margin: 0,
  },
  errorMessage: {
    color: '#6b7280',
    marginTop: 10,
    fontSize: '0.95rem',
    maxWidth: 400,
  },
  errorSlug: {
    marginTop: 12,
    fontSize: '0.75rem',
    color: '#9ca3af',
  },
  errorCode: {
    background: '#f3f4f6',
    padding: '2px 6px',
    borderRadius: 4,
    fontFamily: 'monospace',
  },
};
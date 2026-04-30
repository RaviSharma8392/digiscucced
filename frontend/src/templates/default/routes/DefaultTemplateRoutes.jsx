import { Routes, Route, Link } from 'react-router-dom';

/**
 * DefaultTemplateRoutes
 *
 * Fallback template shown when:
 *  - A tenant's manifest.template is unrecognised
 *  - The manifest points to a template not yet built
 *
 * This must NEVER crash. It renders a safe, minimal UI always.
 */
export default function DefaultTemplateRoutes({ business }) {
  return (
    <Routes>
      <Route path="*" element={<DefaultPage business={business} />} />
    </Routes>
  );
}

function DefaultPage({ business }) {
  const name = business?.brand?.name || business?.name || business?.slug || 'This Business';
  const slug = business?.slug || '';
  const phone = business?.contact?.phone || '';
  const email = business?.contact?.email || '';

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        color: '#fff',
        fontFamily: 'Inter, system-ui, sans-serif',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '1.5rem',
          padding: '3rem 2.5rem',
          maxWidth: '480px',
          width: '100%',
        }}
      >
        {/* Logo/Icon placeholder */}
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '2rem',
          }}
        >
          🏛️
        </div>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          {name}
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Welcome! Our website is being set up. Please check back soon.
        </p>

        {/* Contact info if available */}
        {(phone || email) && (
          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '0.75rem',
              padding: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {phone && (
              <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                📞 <a href={`tel:${phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{phone}</a>
              </p>
            )}
            {email && (
              <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                ✉️ <a href={`mailto:${email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{email}</a>
              </p>
            )}
          </div>
        )}

        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '1.5rem' }}>
          Powered by DigiSucceed CMS
        </p>
      </div>
    </div>
  );
}

import { Routes, Route } from 'react-router-dom';

/**
 * CoachingTemplate2Routes
 *
 * Placeholder — Template 2 is under development.
 * Falls back to a minimal safe UI.
 */
export default function CoachingTemplate2Routes({ business }) {
  const name = business?.brand?.name || business?.name || 'Coaching Institute';

  return (
    <Routes>
      <Route
        path="*"
        element={
          <div
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Inter, system-ui, sans-serif',
              background: '#0f172a',
              color: '#f1f5f9',
              textAlign: 'center',
              padding: '2rem',
            }}
          >
            <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>{name}</h1>
            <p style={{ color: '#94a3b8', marginTop: '0.5rem' }}>
              Website under construction. Coming soon!
            </p>
          </div>
        }
      />
    </Routes>
  );
}

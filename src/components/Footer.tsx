import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      padding: '50px 0',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      backgroundColor: 'rgba(0,0,0,0.3)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/images/logo_white.png" alt="Bondiz Logo" style={{ height: '50px' }} />
        </div>
        
        <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>
          © 2026 Bondiz. Tous droits réservés. Façonné avec ❤️ pour les rencontres réelles.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '20px 0',
      transition: 'var(--transition)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/images/logo_white.png" alt="Bondiz Logo" className="navbar-logo" />
        </div>
        
        <div className="navbar-menu">
          <a href="#about" style={{ opacity: 0.8 }}>À propos</a>
          <a href="#features" style={{ opacity: 0.8 }}>Fonctionnalités</a>
          <a href="#download" className="btn-cta" style={{ padding: '12px 30px', fontSize: '1rem' }}>Télécharger</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

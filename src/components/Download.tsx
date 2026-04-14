import React from 'react';

const Download: React.FC = () => {
  return (
    <section id="download" className="section" style={{
      textAlign: 'center',
      background: 'linear-gradient(180deg, var(--color-purple) 0%, #6b28d1 100%)'
    }}>
      <div className="container animate-fade-in">
        <p style={{ fontSize: '1.2rem', marginBottom: '50px', opacity: 0.9 }}>
          Téléchargez l'application Bondiz maintenant et commencez à créer des souvenirs.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <a href="/downloads/bondiz.apk" download className="glass" style={{
            padding: '20px 40px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            minWidth: '280px',
            border: '2px solid rgba(255,255,255,0.2)',
            cursor: 'pointer',
            transition: 'var(--transition)'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.924 6.136l1.539-2.664a.312.312 0 1 0-.538-.312L17.18 5.776A10.15 10.15 0 0 0 12 4.148c-1.933 0-3.702.544-5.18 1.479L5.281 2.96a.312.312 0 1 0-.538.312l1.539 2.664C3.962 7.634 2.114 10.437 2.114 13.679v.831h19.772v-.831c0-3.242-1.848-6.045-4.576-7.543z" />
              <circle cx="17.5" cy="14.5" r="0.8" fill="white" />
              <circle cx="6.5" cy="14.5" r="0.8" fill="white" />
            </svg>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Télécharger pour Android</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>Fichier APK</div>
            </div>
          </a>

          <div className="glass" style={{
            padding: '20px 40px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            minWidth: '280px',
            border: '2px solid rgba(255,255,255,0.2)',
            opacity: 0.6,
            cursor: 'default',
            filter: 'grayscale(0.5)'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74.84-.04 1.91-.77 3.44-.64 1.5.13 2.65.74 3.39 1.81-3.02 1.8-2.5 5.9.52 7.15-.65 1.63-1.54 3.25-2.43 3.91zM12.03 7.25c-.08-2.69 2.21-4.96 4.79-5.11.13 2.87-2.31 5.08-4.79 5.11z" />
            </svg>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Bientôt disponible</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>Version iOS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;

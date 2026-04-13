import React from 'react';

const features = [
  {
    title: "Activités",
    description: "Découvrez et proposez des activités autour de vous (sport, sorties, jeux).",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-cta)' }}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    title: "Agenda",
    description: "Gérez votre planning social en toute simplicité avec notre calendrier intégré.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-cta)' }}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: "Messagerie",
    description: "Discutez avec vos futurs amis avant et après vos activités.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-cta)' }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: "Rencontres amicales",
    description: "Un algorithme pensé pour vous connecter avec des personnes qui vous ressemblent.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-cta)' }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>
          Pourquoi choisir <span style={{ color: 'var(--color-cta)' }}>Bondiz</span> ?
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {features.map((feature, index) => (
            <div key={index} className="glass animate-fade-in" style={{
              padding: '40px',
              borderRadius: '30px',
              textAlign: 'center',
              transition: 'var(--transition)',
              cursor: 'default'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{feature.icon}</div>
              <h3 style={{ marginBottom: '15px' }}>{feature.title}</h3>
              <p style={{ opacity: 0.8 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

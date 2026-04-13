import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="section">
          <div className="container animate-fade-in">
            <div className="glass" style={{ padding: '60px', borderRadius: '40px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Le concept <span className="text-gradient">Bondiz</span></h2>
              <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                Marre de swiper sans fin ? Bondiz casse les codes des applications de rencontre classiques en se concentrant sur le plus important : <strong>le réel</strong>. 
                <br /><br />
                Notre mission est de faciliter les rencontres amicales à travers des centres d'intérêt communs. Que vous cherchiez un partenaire de tennis, une équipe pour un escape game ou simplement des personnes avec qui partager un verre, Bondiz vous connecte aux bonnes personnes au bon moment.
              </p>
            </div>
          </div>
        </section>
        <Features />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;

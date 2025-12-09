import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Showcase from './sections/Showcase';
import Features from './sections/Features';
import FeatureDetails from './sections/FeatureDetails';
import About from './sections/About';
import PrivacyPolicy from './sections/PrivacyPolicy';
import TermsOfService from './sections/TermsOfService';
import Download from './sections/Download';

function App() {
  useEffect(() => {
    // Force light mode
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <FeatureDetails />
        <About />
        <PrivacyPolicy />
        <TermsOfService />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;

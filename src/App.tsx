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
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-50 overflow-x-hidden">
      <Navbar />
      <main className="w-full">
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
      <ScrollToTop />
    </div>
  );
}

export default App;

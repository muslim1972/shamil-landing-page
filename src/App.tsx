import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Features from './sections/Features';
import FeatureDetails from './sections/FeatureDetails';
import About from './sections/About';
import Download from './sections/Download';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeatureDetails />
        <About />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;

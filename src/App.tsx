import PortfolioHero from './components/ui/portfolio-hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import WorkSamples from './components/WorkSamples';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import GrainOverlay from './components/GrainOverlay';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <GrainOverlay />
      <ScrollProgress />
      <ThemeToggle />
      <PortfolioHero />
      <main>
        <Services />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <WorkSamples />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

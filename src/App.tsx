import { useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Discover from './sections/Discover';
import About from './sections/About';
import Services from './sections/Services';
import Destinations from './sections/Destinations';
import Cruises from './sections/Cruises';
import MediaShowcase from './sections/MediaShowcase';
import Testimonials from './sections/Testimonials';
import Inquiry from './sections/Inquiry';
import Footer from './sections/Footer';
import PrivacyPolicy from './sections/PrivacyPolicy';
import TermsOfService from './sections/TermsOfService';

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="relative">
      {/* Luxury grain overlay */}
      <div className="grain-overlay" />

      <Navigation />

      <main className="relative">
        <Hero />
        <Discover />
        <About />
        <Services />
        <Destinations />
        <Cruises />
        <MediaShowcase />
        <Testimonials />
        <Inquiry />
        <Footer onPrivacy={() => setShowPrivacy(true)} onTerms={() => setShowTerms(true)} />
      </main>

      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      {showTerms && <TermsOfService onClose={() => setShowTerms(false)} />}
    </div>
  );
}

export default App;

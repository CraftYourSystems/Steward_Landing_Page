import Navbar from './components/layout/Navbar';
import CompassBackground from './components/layout/CompassBackground';
import AbstractShapes from './components/layout/AbstractShapes';
import Hero from './sections/Hero';
import Needle from './sections/Needle';
import OneSystem from './sections/OneSystem';
import DayWithSteward from './sections/DayWithSteward';
import BuiltForRestaurants from './sections/BuiltForRestaurants';
import Pricing from './sections/Pricing';
import Features from './sections/Features';
import EarlyPartners from './sections/EarlyPartners';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="font-primary text-steward-text-secondary bg-steward-canvas min-h-screen relative">
      {/* Abstract ambient shapes layer */}
      <AbstractShapes />

      {/* Global Animated Compass */}
      <CompassBackground />

      {/* Navigation Component */}
      <Navbar />

      {/* Main content — section-gap creates physical gaps between each section */}
      <main className="section-gap relative z-10" style={{ paddingTop: '72px' }}>
        {/* Hero Section */}
        <Hero />

        {/* Needle Section */}
        <Needle />

        {/* One System Section */}
        <OneSystem />

        {/* Day with Steward Section */}
        <DayWithSteward />

        {/* Built for Restaurants Section */}
        <BuiltForRestaurants />

        {/* Features Section */}
        <Features />

        {/* Pricing Section */}
        <Pricing />

        {/* Early Partners Section */}
        <EarlyPartners />

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Section */}
        <FinalCTA />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

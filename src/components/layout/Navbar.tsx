import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { CONTACT_INFO } from '../../config/contact';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Memoized static navigation links
  const links = useMemo(() => [
    { label: 'Product', href: '#product' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' }
  ], []);

  // Passive scroll listener to manage background state transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initially to set correct state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // IntersectionObserver to handle Scroll Spy
  useEffect(() => {
    const sectionIds = links.map(link => link.href.substring(1));
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [links]);

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-steward-canvas/90 backdrop-blur-md border-steward-border shadow-steward-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="container relative h-full flex items-center justify-between"
      >
        {/* Left: Logo placeholder */}
        <a
          href="#hero"
          aria-label="Steward Home"
          className="touch-target flex items-center text-xl font-bold font-secondary tracking-tight hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus text-steward-text-primary"
        >
          Steward
        </a>

        {/* Center: Desktop navigation links (Optically Centered) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center gap-[32px]">
            {links.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`touch-target flex items-center text-base font-medium font-primary transition-opacity duration-150 hover:opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas rounded-md ${
                      isActive ? 'font-semibold text-steward-text-primary' : 'text-steward-text-secondary'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="inline-block w-[2px] h-[2px] bg-steward-accent ml-1.5 align-baseline mb-[3px]" aria-hidden="true" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Desktop CTA & Mobile controls */}
        <div className="flex items-center gap-[24px] lg:gap-0">
          <a
            href={CONTACT_INFO.whatsappUrl}
            className="touch-target flex items-center justify-center px-[28px] py-[12px] text-base font-medium font-primary border border-steward-text-primary bg-transparent rounded-md hover:bg-steward-text-primary hover:text-steward-canvas focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas text-steward-text-primary steward-interactive"
          >
            Book a Demo
          </a>

          {/* Hamburger Trigger for Mobile/Tablet */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-overlay"
            aria-label="Toggle menu"
            className="lg:hidden touch-target flex items-center justify-center text-steward-text-primary hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas rounded-md"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Portal (Rendered directly in tree as per instructions, using AnimatePresence for transitions) */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            links={links}
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

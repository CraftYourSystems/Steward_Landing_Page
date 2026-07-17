import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

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
      rootMargin: '-50% 0px -50% 0px', // Trigger active state when section takes up the middle of screen
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
      className={`fixed top-0 left-0 right-0 z-40 h-[72px] transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="container relative h-full flex items-center justify-between"
      >
        {/* Left: Logo placeholder */}
        <a
          href="#"
          aria-label="Steward Home"
          className="touch-target flex items-center text-xl font-bold font-secondary tracking-tight hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
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
                    className={`touch-target flex items-center text-base font-medium font-primary transition-opacity duration-150 hover:opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                      isActive ? 'underline decoration-1 underline-offset-4 font-semibold text-black' : 'text-gray-600'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Desktop CTA & Mobile controls */}
        <div className="flex items-center gap-[24px] lg:gap-0">
          <a
            href="#book-a-demo"
            className="touch-target flex items-center justify-center px-[24px] py-[12px] text-base font-medium font-primary border border-black hover:bg-black hover:text-white transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            Book a Demo
          </a>

          {/* Hamburger Trigger for Mobile/Tablet */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-overlay"
            aria-label="Toggle menu"
            className="lg:hidden touch-target flex items-center justify-center text-gray-900 hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
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

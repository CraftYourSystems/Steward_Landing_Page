import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string }>;
  activeSection: string;
}

export default function MobileMenu({ isOpen, onClose, links, activeSection }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Trap focus and handle keyboard navigation (Escape key)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && overlayRef.current) {
        const focusableElements = overlayRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex="0"]'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    // Autofocus close button to assist accessibility screen reader user pathways
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Level 2 duration: 180ms–250ms (we choose 200ms) with ease-out curve.
  const menuVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 }
  };

  const transition = {
    duration: 0.3, // var(--steward-duration-normal)
    ease: [0.4, 0, 0.2, 1] as const // var(--steward-ease-standard)
  };

  return (
    <motion.div
      id="mobile-nav-overlay"
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-steward-canvas"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      transition={transition}
    >
      {/* Menu Header */}
      <div className="flex h-[72px] items-center justify-between px-4 sm:px-8">
        <span className="text-xl font-bold font-secondary text-steward-text-primary">Steward</span>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close menu"
          className="touch-target flex items-center justify-center text-steward-text-secondary hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas rounded-md"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Menu Links */}
      <div className="flex flex-col items-center justify-center flex-1 space-y-8 py-12">
        <ul className="flex flex-col items-center space-y-6">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  aria-current={isActive ? 'page' : undefined}
                  className={`touch-target flex items-center text-2xl font-medium font-primary transition-opacity duration-150 hover:opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas rounded-md ${
                    isActive ? 'font-semibold text-steward-text-primary' : 'text-steward-text-secondary'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="inline-block w-[2px] h-[2px] bg-steward-accent ml-1.5 align-baseline mb-[4px]" aria-hidden="true" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Primary CTA */}
        <a
          href={CONTACT_INFO.whatsappUrl}
          onClick={onClose}
          className="touch-target flex items-center justify-center px-[36px] py-[16px] font-semibold font-primary bg-steward-accent text-steward-canvas border border-steward-accent rounded-md hover:bg-steward-accent-hover hover:border-steward-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas steward-interactive"
        >
          Book a Demo
        </a>
      </div>
    </motion.div>
  );
}

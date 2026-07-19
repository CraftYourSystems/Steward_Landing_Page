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
    <>
      {/* Backdrop overlay */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <motion.div
        id="mobile-nav-overlay"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        className="fixed top-[80px] right-4 left-4 sm:left-auto sm:right-6 sm:w-[320px] z-50 rounded-2xl border border-steward-border bg-steward-canvas shadow-2xl"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={menuVariants}
        transition={transition}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-steward-border">
          <span className="text-lg font-bold font-secondary text-steward-text-primary">Menu</span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close menu"
            className="touch-target flex items-center justify-center w-8 h-8 rounded-lg bg-steward-hover text-steward-text-secondary hover:bg-steward-active hover:text-steward-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus transition-colors duration-150"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col px-4 py-3">
          <ul className="flex flex-col">
            {links.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-2 px-3 py-3 rounded-xl text-lg font-medium font-primary transition-all duration-150 hover:bg-steward-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus rounded-md ${
                      isActive
                        ? 'font-semibold text-steward-text-primary bg-steward-active'
                        : 'text-steward-text-secondary'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-steward-accent" aria-hidden="true" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Primary CTA */}
        <div className="px-4 pb-5 pt-2">
          <a
            href={CONTACT_INFO.whatsappUrl}
            onClick={onClose}
            className="touch-target flex items-center justify-center w-full px-[28px] py-[14px] font-semibold font-primary bg-steward-accent text-steward-canvas border border-steward-accent rounded-xl hover:bg-steward-accent-hover hover:border-steward-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas steward-interactive text-base"
          >
            Book a Demo
          </a>
        </div>
      </motion.div>
    </>
  );
}

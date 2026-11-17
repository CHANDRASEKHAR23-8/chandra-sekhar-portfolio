import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import Container from './Container';
import Button from '../ui/Button';
import ThemeToggle from '../common/ThemeToggle';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { personalInfo, navigationLinks } from '../../data/portfolioData';

/**
 * Premium, Responsive Navigation Bar with Unified Theme Integration.
 * Features sticky backdrop-blur, smooth section navigation, active link tracking,
 * dual desktop & mobile dark/light theme switchers, accessible drawer, and keyboard support.
 * Configured with explicit top-level z-index (z-50 / z-fixed) to ensure all interactive buttons
 * receive physical mouse and touch clicks without interference from underlying sections.
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const sectionIds = navigationLinks.map((item) => item.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds, 120);

  // Detect scroll offset for sticky glassmorphism style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation & Click outside handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll handler for anchor links
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 z-fixed transition-all duration-300 will-change-[padding,background-color,border-color]',
        isScrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border-subtle py-2.5 sm:py-3 shadow-subtle'
          : 'bg-transparent py-3.5 sm:py-5'
      )}
    >
      {/* Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-elevation focus:outline-none focus:ring-2 focus:ring-border-focus font-medium text-sm"
      >
        Skip to main content
      </a>
      <Container size="xl">
        <nav className="flex items-center justify-between relative z-10" aria-label="Main Navigation">
          {/* Logo / Monogram: CS.dev */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 text-text-primary hover:text-primary transition-colors group focus-visible:ring-2 focus-visible:ring-border-focus rounded-lg px-1.5 py-1"
            aria-label={`${personalInfo.fullName} Portfolio Home`}
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-105 group-hover:shadow-glow-primary transition-all duration-200">
              <Code2 size={18} />
            </div>
            <span className="font-mono font-bold tracking-tight text-base sm:text-lg select-none">
              CS<span className="text-primary">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-1.5" role="menubar">
            {navigationLinks.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <li key={item.label} role="none">
                  <a
                    href={item.href}
                    role="menuitem"
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-border-focus active:scale-95',
                      isActive
                        ? 'text-primary bg-primary-subtle font-semibold shadow-xs'
                        : 'text-text-secondary hover:text-text-primary hover:bg-background-elevated/70'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action Items: Theme Toggle & Contact Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <Button
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Contact Me
            </Button>

            {/* Mobile Menu Hamburger Button with 44px Accessible Tap Target */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="md:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-background-elevated border border-border-subtle transition-all duration-200 focus-visible:ring-2 focus-visible:ring-border-focus active:scale-95 flex items-center justify-center cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown with Smooth Reveal */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation-menu"
            className="md:hidden mt-3 p-4 rounded-xl glass-panel border border-border-subtle shadow-elevation animate-in fade-in slide-in-from-top-2 duration-300 relative z-20"
          >
            <ul className="flex flex-col gap-1" role="menu">
              {navigationLinks.map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <li key={item.label} role="none">
                    <a
                      href={item.href}
                      role="menuitem"
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        'flex items-center min-h-[44px] px-4 py-2.5 rounded-lg text-sm font-medium transition-colors active:scale-[0.98]',
                        isActive
                          ? 'text-primary bg-primary-subtle font-semibold'
                          : 'text-text-secondary hover:text-text-primary hover:bg-background-elevated'
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="pt-3 mt-2 border-t border-border-subtle flex flex-col gap-2.5">
              {/* Mobile Dedicated Theme Switcher */}
              <div className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-background-elevated/70 border border-border-subtle">
                <span className="text-xs font-mono text-text-secondary">Switch Theme</span>
                <ThemeToggle showLabel />
              </div>

              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center min-h-[44px]"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

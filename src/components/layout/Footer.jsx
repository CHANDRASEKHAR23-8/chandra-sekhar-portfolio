import React from 'react';
import { Code2, ArrowUp, Github, Linkedin, ExternalLink } from 'lucide-react';
import Container from './Container';
import { personalInfo } from '../../data/portfolioData';

/**
 * Premium, Responsive Footer Component for Phase 9.
 * Features:
 * - Brand logo CS.dev with Code2 icon and hover animation
 * - Project owner: CHINNI CHANDRA SEKHAR
 * - Professional title and institution
 * - Verified GitHub & LinkedIn profiles with interactive lift
 * - Dynamic copyright year (new Date().getFullYear())
 * - Accessible "Back to Top" button with smooth scrolling, arrow lift animation, and tactile press
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-background-subtle border-t border-border-subtle py-12 transition-colors duration-200 overflow-hidden">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-border-subtle">
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded-lg px-1 py-0.5 active:scale-95 transition-transform"
              aria-label="Back to top of page"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 group-hover:shadow-glow-primary transition-all duration-200">
                <Code2 size={18} />
              </div>
              <span className="font-mono font-bold text-lg text-text-primary tracking-tight">
                CS<span className="text-primary">.dev</span>
              </span>
            </a>

            <div className="pt-1">
              <h3 className="font-semibold text-text-primary text-sm sm:text-base">
                {personalInfo.fullName}
              </h3>
              <p className="text-xs text-text-secondary mt-0.5">
                {personalInfo.roles.join(' • ')}
              </p>
              <p className="text-xs text-text-muted mt-0.5">
                {personalInfo.education.institution} &bull; {personalInfo.education.status}
              </p>
            </div>
          </div>

          {/* Direct Verified Social Links */}
          <div className="md:col-span-4 flex flex-col sm:flex-row md:justify-center items-start sm:items-center gap-3">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[42px] rounded-lg bg-background border border-border-subtle hover:border-primary/50 text-text-secondary hover:text-primary hover:-translate-y-0.5 hover:shadow-subtle active:scale-95 transition-all duration-200 text-xs font-medium focus-visible:ring-2 focus-visible:ring-border-focus"
              aria-label="Chinni Chandra Sekhar LinkedIn Profile"
            >
              <Linkedin size={15} className="text-primary" />
              <span>LinkedIn</span>
              <ExternalLink size={12} className="text-text-muted" />
            </a>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[42px] rounded-lg bg-background border border-border-subtle hover:border-accent-cyan/50 text-text-secondary hover:text-accent-cyan hover:-translate-y-0.5 hover:shadow-subtle active:scale-95 transition-all duration-200 text-xs font-medium focus-visible:ring-2 focus-visible:ring-border-focus"
              aria-label="Chinni Chandra Sekhar GitHub Profile"
            >
              <Github size={15} className="text-accent-cyan" />
              <span>GitHub</span>
              <ExternalLink size={12} className="text-text-muted" />
            </a>
          </div>

          {/* Back to Top Button with Lift Animation */}
          <div className="md:col-span-3 flex justify-start md:justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-background hover:bg-background-elevated border border-border-subtle hover:border-primary/50 hover:shadow-glow-primary hover:-translate-y-1 text-text-secondary hover:text-text-primary transition-all duration-200 text-xs font-mono font-medium group focus-visible:ring-2 focus-visible:ring-border-focus shadow-subtle active:scale-95"
              aria-label="Scroll back to top of the page"
            >
              <span>Back to Top</span>
              <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-200">
                <ArrowUp size={13} />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Sub-footer / Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted font-mono">
          <div>
            &copy; {currentYear} <span className="text-text-secondary font-medium">CS.dev</span> &bull; {personalInfo.fullName}
          </div>
          <div>
            Built with React & Tailwind CSS
          </div>
        </div>
      </Container>
    </footer>
  );
}

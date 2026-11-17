import React from 'react';
import {
  ArrowRight,
  Mail,
  GraduationCap,
  Sparkles,
  Code2,
  Terminal,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import SocialLinks from '../components/common/SocialLinks';
import { personalInfo } from '../data/portfolioData';

/**
 * Hero Section Component for Chinni Chandra Sekhar.
 * Accurately displays verified professional identity, education credentials,
 * CTA buttons with smooth navigation, social links, staggered CSS entrance animations,
 * and an interactive code terminal visual.
 */
export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      aria-label="Introduction & Hero"
    >
      {/* Ambient Radial Glows (Background Visuals) */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-primary/10 rounded-full blur-[100px] md:blur-[120px] -z-10 animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] bg-accent-cyan/10 rounded-full blur-[90px] md:blur-[100px] -z-10"
        aria-hidden="true"
      />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Call to Action (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & College Pill */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5 sm:mb-6 animate-hero-fade-up">
              <Badge variant="emerald" size="md" dot pulse>
                {personalInfo.education.status}
              </Badge>
              <Badge variant="primary" size="md" icon={<GraduationCap size={13} />}>
                {personalInfo.education.degree}
              </Badge>
            </div>

            {/* Introduction Lead */}
            <span className="text-body-base sm:text-body-lg font-mono text-text-secondary font-medium tracking-wide animate-hero-fade-up animation-delay-100">
              Hello, I'm
            </span>

            {/* Full Name */}
            <h1 className="mt-2 text-display font-extrabold text-text-primary tracking-tight break-words animate-hero-fade-up animation-delay-200">
              <span className="text-gradient-primary">{personalInfo.fullName}</span>
            </h1>

            {/* Professional Title & AI/ML Interest */}
            <div className="mt-3 sm:mt-4 space-y-1.5 animate-hero-fade-up animation-delay-300">
              <h2 className="text-h2 font-bold text-text-primary">
                Software Engineer{' '}
                <span className="text-text-muted font-normal">|</span>{' '}
                <span className="text-gradient-accent">Java & Full Stack Developer</span>
              </h2>
              <p className="inline-flex items-center gap-2 text-body-base sm:text-body-lg font-medium text-accent-cyan">
                <Sparkles size={18} className="shrink-0 text-accent-cyan" />
                <span>AI/ML Enthusiast</span>
              </p>
            </div>

            {/* Professional Bio strictly based on provided information */}
            <p className="mt-4 sm:mt-5 text-body-base sm:text-body-lg text-text-secondary leading-relaxed max-w-2xl animate-hero-fade-up animation-delay-400">
              Computer Science and Engineering undergraduate at{' '}
              <span className="text-text-primary font-medium">
                {personalInfo.education.institution}
              </span>
              , specializing in Java and full-stack software development with a dedicated focus on
              applied AI/ML engineering.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto animate-hero-fade-up animation-delay-500">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                rightIcon={<ArrowRight size={16} />}
                className="w-full sm:w-auto justify-center"
              >
                Explore My Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                leftIcon={<Mail size={16} />}
                className="w-full sm:w-auto justify-center"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links Bar */}
            <div className="mt-7 sm:mt-8 pt-6 border-t border-border-subtle w-full max-w-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-hero-fade-up animation-delay-600">
              <span className="text-caption text-text-muted">Connect With Me:</span>
              <SocialLinks variant="pills" />
            </div>
          </div>

          {/* Right Column: Abstract Developer Visual & Code Terminal (5 cols) */}
          <div className="lg:col-span-5 flex justify-center w-full animate-hero-fade-in animation-delay-300">
            <div className="relative w-full max-w-lg lg:max-w-none animate-subtle-float">
              {/* Decorative Background Frame */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 to-accent-cyan/30 blur-lg opacity-70 transition duration-500 group-hover:opacity-100 -z-10"
                aria-hidden="true"
              />

              {/* Terminal Card */}
              <div className="relative rounded-2xl bg-terminal-bg border border-terminal-border shadow-elevation backdrop-blur-xl overflow-hidden transition-colors duration-200">
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-terminal-header border-b border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
                    <Terminal size={13} className="text-primary" />
                    <span>ChandraSekhar.java</span>
                  </div>
                  <div className="w-12 text-right">
                    <span className="font-mono text-[10px] text-accent-cyan">UTF-8</span>
                  </div>
                </div>

                {/* Terminal Code Body */}
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-terminal-text">
                  <div className="text-text-muted italic mb-3">
                    // Profile Blueprint & Technical Stack
                  </div>

                  <div className="space-y-1.5">
                    <div>
                      <span className="text-terminal-keyword font-semibold">public class</span>{' '}
                      <span className="text-terminal-class font-semibold">ChandraSekhar</span> {'{'}
                    </div>

                    <div className="pl-4 sm:pl-6 space-y-1">
                      <div>
                        <span className="text-terminal-type font-medium">String</span>{' '}
                        <span className="text-terminal-text">role</span> ={' '}
                        <span className="text-terminal-string font-medium">"Software Engineer"</span>;
                      </div>

                      <div>
                        <span className="text-terminal-type font-medium">String</span>{' '}
                        <span className="text-terminal-text">specialization</span> ={' '}
                        <span className="text-terminal-string font-medium">"Java & Full Stack"</span>;
                      </div>

                      <div>
                        <span className="text-terminal-type font-medium">String</span>{' '}
                        <span className="text-terminal-text">focus</span> ={' '}
                        <span className="text-terminal-string font-medium">"AI/ML Enthusiast"</span>;
                      </div>

                      <div>
                        <span className="text-terminal-type font-medium">String</span>{' '}
                        <span className="text-terminal-text">education</span> ={' '}
                        <span className="text-terminal-string font-medium">"B.Tech CSE (3rd Year)"</span>;
                      </div>

                      <div>
                        <span className="text-terminal-type font-medium">String</span>{' '}
                        <span className="text-terminal-text">institution</span> ={' '}
                        <span className="text-terminal-string font-medium">"LBRCE"</span>;
                      </div>

                      <div>
                        <span className="text-terminal-type font-medium">boolean</span>{' '}
                        <span className="text-terminal-text">openToCollaborations</span> ={' '}
                        <span className="text-terminal-bool font-semibold">true</span>;
                      </div>
                    </div>

                    <div>{'}'}</div>
                  </div>

                  {/* Terminal Execution Feedback */}
                  <div className="mt-4 pt-4 border-t border-border-subtle/60 flex items-center gap-2 text-status-success text-xs">
                    <CheckCircle2 size={14} className="shrink-0" />
                    <span>Compiled successfully: ready to engineer robust solutions.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

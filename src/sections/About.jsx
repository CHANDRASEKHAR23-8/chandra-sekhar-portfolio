import React from 'react';
import {
  Code2,
  Layers,
  Brain,
  Sparkles,
  GraduationCap,
  Building2,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import Container from '../components/layout/Container';
import SectionHeading from '../components/common/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { personalInfo } from '../data/portfolioData';

/**
 * About Me Section Component.
 * Presents a professional introduction of Chinni Chandra Sekhar, highlighting software interests,
 * Java & full-stack development, AI/ML exploration, and learning motivation.
 * Enhanced with ScrollReveal animations and responsive design.
 */
export default function About() {
  const focusPillars = [
    {
      title: personalInfo.about.focusAreas[0].title,
      description: personalInfo.about.focusAreas[0].description,
      icon: Code2,
      variant: 'primary',
      badge: 'Core Backend',
    },
    {
      title: personalInfo.about.focusAreas[1].title,
      description: personalInfo.about.focusAreas[1].description,
      icon: Layers,
      variant: 'cyan',
      badge: 'Web Systems',
    },
    {
      title: personalInfo.about.focusAreas[2].title,
      description: personalInfo.about.focusAreas[2].description,
      icon: Brain,
      variant: 'violet',
      badge: 'Intelligent Tech',
    },
    {
      title: personalInfo.about.focusAreas[3].title,
      description: personalInfo.about.focusAreas[3].description,
      icon: Sparkles,
      variant: 'emerald',
      badge: 'Continuous Growth',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 border-b border-border-subtle relative overflow-hidden"
      aria-label="About Me"
    >
      {/* Subtle Ambient Background Accents */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-64 sm:w-72 h-64 sm:h-72 bg-primary/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-accent-cyan/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container size="xl">
        <ScrollReveal>
          {/* Section Heading */}
          <SectionHeading
            badge="About Me"
            badgeVariant="primary"
            title="Engineering Passion &"
            gradientTitle="Technical Drive"
            description="A motivated Computer Science student dedicated to mastering software development, full-stack systems, and practical machine learning."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Introduction Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={100}>
              <Card variant="default" className="p-2 sm:p-4">
                <CardContent className="space-y-5">
                  <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider">
                    <Compass size={16} />
                    <span>Personal Introduction</span>
                  </div>

                  <h3 className="text-h3 font-bold text-text-primary">
                    Building with purpose, learning with curiosity.
                  </h3>

                  <p className="text-body-base text-text-secondary leading-relaxed">
                    {personalInfo.about.summary}
                  </p>

                  <p className="text-body-base text-text-secondary leading-relaxed">
                    {personalInfo.about.motivation}
                  </p>

                  {/* Academic & Professional Snapshot Pills */}
                  <div className="pt-4 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-3.5 rounded-xl bg-background-subtle border border-border-subtle flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                        <GraduationCap size={18} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11px] font-mono uppercase text-text-muted block">
                          Academic Standing
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-text-primary block truncate">
                          {personalInfo.education.status}
                        </span>
                        <span className="text-xs text-text-secondary block truncate">
                          {personalInfo.education.degree}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-background-subtle border border-border-subtle flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan shrink-0 mt-0.5">
                        <Building2 size={18} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11px] font-mono uppercase text-text-muted block">
                          Institution
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-text-primary block truncate">
                          LBRCE
                        </span>
                        <span className="text-xs text-text-secondary block truncate" title={personalInfo.education.institution}>
                          {personalInfo.education.institution}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Right Column: 4 Focus Pillar Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {focusPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={150 + index * 75}>
                  <Card
                    variant="interactive"
                    className="transition-all duration-300 group hover:-translate-y-1 hover:shadow-elevation"
                  >
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-lg bg-background-surface border border-border-subtle flex items-center justify-center text-text-primary group-hover:scale-105 group-hover:border-primary/40 transition-all duration-200">
                          <Icon size={18} className="text-primary" />
                        </div>
                        <Badge variant={pillar.variant} size="sm">
                          {pillar.badge}
                        </Badge>
                      </div>

                      <h4 className="text-sm sm:text-base font-semibold text-text-primary mb-1.5 group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {pillar.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

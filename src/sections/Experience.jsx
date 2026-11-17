import React from 'react';
import {
  Briefcase,
  Calendar,
  Building2,
  CheckCircle2,
  Code2,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import Container from '../components/layout/Container';
import SectionHeading from '../components/common/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { personalInfo, experienceData } from '../data/portfolioData';

/**
 * Experience Section Component.
 * Presents Chinni Chandra Sekhar's professional and technical experience.
 * If no verified corporate experience or internships exist, displays a clean,
 * transparent, and professional message reflecting active academic and project building.
 * Enhanced with ScrollReveal and interactive hover feedback.
 */
export default function Experience() {
  const hasExperience = experienceData && experienceData.length > 0;

  const handleContactClick = (e) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-b border-border-subtle relative overflow-hidden"
      aria-label="Professional Experience"
    >
      {/* Subtle Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container size="xl">
        <ScrollReveal>
          {/* Section Heading */}
          <SectionHeading
            badge="Experience"
            badgeVariant="primary"
            title="Professional &"
            gradientTitle="Practical Experience"
            description="Hands-on software development experience, technical training, and engineering milestones."
          />
        </ScrollReveal>

        {hasExperience ? (
          /* Rendered Timeline / Experience Cards (when verified roles exist) */
          <div className="max-w-4xl mx-auto space-y-8">
            {experienceData.map((exp, index) => (
              <ScrollReveal key={exp.id || index} delay={index * 80}>
                <Card variant="interactive" className="p-4 sm:p-6 group hover:-translate-y-1 hover:shadow-elevation transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-primary flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </span>
                      {exp.type && <Badge variant="primary" size="sm">{exp.type}</Badge>}
                    </div>
                    <CardTitle className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                      {exp.role}
                    </CardTitle>
                    <div className="text-sm font-medium text-accent-cyan flex items-center gap-1.5 mt-1">
                      <Building2 size={15} />
                      <span>{exp.company}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-1">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-mono text-text-secondary bg-background-subtle border border-border-subtle"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          /* Professional Academic & Learning State */
          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <Card
                variant="interactive"
                className="p-4 sm:p-8 text-center relative overflow-hidden group hover:-translate-y-1 hover:shadow-elevation transition-all duration-300"
              >
                <CardContent className="space-y-6 pt-4">
                  {/* Visual Icon Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/25 text-primary shadow-glow-primary mb-2 group-hover:scale-105 transition-transform duration-200">
                    <Briefcase size={32} />
                  </div>

                  {/* Status Indicator & Heading */}
                  <div>
                    <Badge variant="emerald" size="md" dot pulse className="mb-3">
                      Active Academic Standing
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                      Building Experience Through Learning & Projects
                    </h3>
                    <p className="mt-2.5 text-body-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
                      Currently expanding practical experience through rigorous undergraduate Computer
                      Science coursework, self-driven software engineering projects, and hands-on laboratory
                      investigation as a 3rd-year student at Lakireddy Bali Reddy College of Engineering.
                    </p>
                  </div>

                  {/* Focus Areas of Practical Engagement */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 max-w-2xl mx-auto text-left">
                    <div className="p-3.5 rounded-xl bg-background-subtle border border-border-subtle hover:border-primary/40 hover:scale-[1.02] transition-all duration-200">
                      <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold mb-1">
                        <BookOpen size={15} />
                        <span>Academic Lab Work</span>
                      </div>
                      <p className="text-xs text-text-secondary">
                        Comprehensive laboratory programming in Java, data structures, and database systems.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-background-subtle border border-border-subtle hover:border-accent-cyan/40 hover:scale-[1.02] transition-all duration-200">
                      <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan font-semibold mb-1">
                        <Code2 size={15} />
                        <span>Project Development</span>
                      </div>
                      <p className="text-xs text-text-secondary">
                        Designing and developing responsive frontend components and modular backend code.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-background-subtle border border-border-subtle hover:border-accent-emerald/40 hover:scale-[1.02] transition-all duration-200">
                      <div className="flex items-center gap-2 text-xs font-mono text-accent-emerald font-semibold mb-1">
                        <Sparkles size={15} />
                        <span>Applied Upskilling</span>
                      </div>
                      <p className="text-xs text-text-secondary">
                        Actively practicing problem solving and exploring practical AI/ML algorithms.
                      </p>
                    </div>
                  </div>

                  {/* Verified Action Buttons */}
                  <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-center gap-3.5">
                    <Button
                      href={personalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      rightIcon={<ExternalLink size={15} />}
                      className="w-full sm:w-auto justify-center"
                    >
                      View LinkedIn Profile
                    </Button>

                    <Button
                      href="#contact"
                      onClick={handleContactClick}
                      variant="outline"
                      size="md"
                      rightIcon={<ArrowRight size={15} />}
                      className="w-full sm:w-auto justify-center"
                    >
                      Get in Touch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        )}
      </Container>
    </section>
  );
}

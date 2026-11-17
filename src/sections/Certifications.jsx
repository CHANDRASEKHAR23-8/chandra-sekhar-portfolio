import React from 'react';
import {
  Award,
  BadgeCheck,
  Calendar,
  ExternalLink,
  BookOpen,
  Code2,
  Cpu,
  Sparkles,
  ArrowRight,
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
import { personalInfo, certificationsData } from '../data/portfolioData';

/**
 * Certifications Section Component.
 * Displays genuine, verified certifications when available,
 * or presents a clean, transparent "Certifications Coming Soon" message reflecting ongoing learning.
 * Enhanced with ScrollReveal and responsive interactive cards.
 */
export default function Certifications() {
  const hasCertifications = certificationsData && certificationsData.length > 0;

  return (
    <section
      id="certifications"
      className="py-20 md:py-28 border-b border-border-subtle relative overflow-hidden"
      aria-label="Certifications"
    >
      {/* Subtle Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-accent-violet/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container size="xl">
        <ScrollReveal>
          {/* Section Heading */}
          <SectionHeading
            badge="Certifications"
            badgeVariant="violet"
            title="Credentials &"
            gradientTitle="Accreditations"
            description="Verified technical credentials, assessments, and professional development milestones."
          />
        </ScrollReveal>

        {hasCertifications ? (
          /* Rendered Certification Cards Grid (when genuine certificates exist) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <ScrollReveal key={cert.id || cert.name} delay={index * 80}>
                <Card
                  variant="interactive"
                  className="flex flex-col justify-between h-full group hover:-translate-y-1.5 hover:shadow-elevation transition-all duration-300"
                >
                  <div>
                    {cert.image && (
                      <div className="relative aspect-video w-full overflow-hidden bg-background-surface border-b border-border-subtle">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <CardHeader>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <Badge variant="violet" size="sm">
                          Verified
                        </Badge>
                        {cert.date && (
                          <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                            <Calendar size={13} />
                            <span>{cert.date}</span>
                          </span>
                        )}
                      </div>

                      <CardTitle className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                        {cert.name}
                      </CardTitle>

                      <CardDescription className="text-xs sm:text-sm font-medium text-accent-cyan mt-1">
                        {cert.issuer}
                      </CardDescription>
                    </CardHeader>

                    {cert.description && (
                      <CardContent className="pt-0">
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {cert.description}
                        </p>
                      </CardContent>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <CardFooter className="pt-4 border-t border-border-subtle">
                      <Button
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="sm"
                        className="w-full justify-center"
                        rightIcon={<ExternalLink size={14} />}
                      >
                        View Credential
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          /* Professional Coming Soon State */
          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <Card
                variant="interactive"
                className="p-4 sm:p-8 text-center relative overflow-hidden group hover:-translate-y-1 hover:shadow-elevation transition-all duration-300"
              >
                <CardContent className="space-y-6 pt-4">
                  {/* Visual Icon Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-violet/10 border border-accent-violet/25 text-accent-violet shadow-glow-accent mb-2 group-hover:scale-105 transition-transform duration-200">
                    <Award size={32} />
                  </div>

                  {/* Status Indicator & Heading */}
                  <div>
                    <Badge variant="violet" size="md" dot pulse className="mb-3">
                      Certifications in Progress
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                      Certifications Coming Soon
                    </h3>
                    <p className="mt-2.5 text-body-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
                      Formal technical certifications and verified course credentials in Java engineering,
                      full-stack web development, and applied AI/ML are actively in progress. Accredited
                      credentials with verification links will be published here upon completion.
                    </p>
                  </div>

                  {/* Active Learning Pathways */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 max-w-2xl mx-auto text-left">
                    <div className="p-3.5 rounded-xl bg-background-subtle border border-border-subtle hover:border-primary/40 hover:scale-[1.02] transition-all duration-200">
                      <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold mb-1">
                        <Code2 size={15} />
                        <span>Java & OOP</span>
                      </div>
                      <p className="text-xs text-text-secondary">
                        Object-oriented programming, data structures, and algorithms.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-background-subtle border border-border-subtle hover:border-accent-cyan/40 hover:scale-[1.02] transition-all duration-200">
                      <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan font-semibold mb-1">
                        <BookOpen size={15} />
                        <span>Full-Stack Web</span>
                      </div>
                      <p className="text-xs text-text-secondary">
                        Modern React, client-server architecture, and frontend tooling.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-background-subtle border border-border-subtle hover:border-accent-violet/40 hover:scale-[1.02] transition-all duration-200">
                      <div className="flex items-center gap-2 text-xs font-mono text-accent-violet font-semibold mb-1">
                        <Cpu size={15} />
                        <span>Applied AI / ML</span>
                      </div>
                      <p className="text-xs text-text-secondary">
                        Machine learning principles, data modeling, and practical AI tools.
                      </p>
                    </div>
                  </div>

                  {/* Verified Action */}
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
                      View Ongoing Learning on LinkedIn
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

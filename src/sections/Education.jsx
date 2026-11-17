import React from 'react';
import {
  GraduationCap,
  Building2,
  BookOpen,
  Calendar,
  CheckCircle2,
  BookmarkCheck,
  Award,
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
import { personalInfo } from '../data/portfolioData';

/**
 * Education Section Component.
 * Presents Chinni Chandra Sekhar's formal undergraduate academic details in a modern, clean card and timeline format.
 * Enhanced with ScrollReveal, timeline node pulsing glow, and interactive coursework pills.
 */
export default function Education() {
  const { degree, branch, institution, status, coursework } = personalInfo.education;

  return (
    <section
      id="education"
      className="py-20 md:py-28 relative overflow-hidden"
      aria-label="Education"
    >
      {/* Subtle Background Glow */}
      <div
        className="pointer-events-none absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-accent-emerald/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container size="xl">
        <ScrollReveal>
          {/* Section Heading */}
          <SectionHeading
            badge="Education"
            badgeVariant="emerald"
            title="Academic Foundation &"
            gradientTitle="Formal Education"
            description="Undergraduate study in Computer Science and Engineering, establishing core fundamentals in computing, software architecture, and algorithms."
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Structure with ScrollReveal */}
          <ScrollReveal delay={100}>
            <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/30 space-y-12">
              {/* Timeline Node Point with Glowing Accent */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-background-elevated border-2 border-primary flex items-center justify-center text-primary shadow-glow-primary transition-transform duration-200 hover:scale-110">
                <GraduationCap size={16} />
              </div>

              {/* Main Education Card */}
              <Card
                variant="interactive"
                className="p-2 sm:p-4 group hover:-translate-y-1 hover:shadow-elevation transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <Badge variant="emerald" size="md" dot pulse>
                      {status}
                    </Badge>
                    <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                      <BookOpen size={14} className="text-primary" />
                      <span>Undergraduate Degree</span>
                    </span>
                  </div>

                  <CardTitle className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    {degree}
                  </CardTitle>

                  <div className="text-base sm:text-lg font-semibold text-primary mt-1">
                    {branch}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 pt-2">
                  {/* Institution Details */}
                  <div className="p-4 rounded-xl bg-background-subtle border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-background-surface border border-border-subtle text-text-primary shrink-0">
                        <Building2 size={20} className="text-accent-cyan" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-mono uppercase text-text-muted block">
                          Institution
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-text-primary block break-words">
                          {institution}
                        </span>
                      </div>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-xs font-mono uppercase text-text-muted block">
                        Program Phase
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-text-secondary">
                        Current: 3rd Year
                      </span>
                    </div>
                  </div>

                  {/* Core Academic Coursework with Interactive Badges */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-mono uppercase text-text-muted tracking-wider mb-3 flex items-center gap-2">
                      <BookmarkCheck size={16} className="text-primary" />
                      <span>Core Curriculum & Computing Fundamentals</span>
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {coursework.map((subject) => (
                        <span
                          key={subject}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium text-text-secondary bg-background-elevated hover:bg-background-surface border border-border-subtle hover:border-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-default"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Academic Highlights */}
                  <div className="pt-4 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-text-secondary font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-accent-emerald shrink-0" />
                      <span>Algorithmic Foundations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-accent-emerald shrink-0" />
                      <span>Object-Oriented Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-accent-emerald shrink-0" />
                      <span>Full-Stack & AI Focus</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

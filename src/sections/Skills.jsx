import React from 'react';
import {
  Code2,
  Layout,
  Wrench,
  Database,
  Brain,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  GitBranch,
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
import { skillsData } from '../data/portfolioData';

/**
 * Technical Skills Section Component.
 * Presents Chinni Chandra Sekhar's programming languages, frontend stack, development tools,
 * database knowledge, and technical interests in an organized, responsive category grid.
 * Enhanced with ScrollReveal, category hover elevations, and interactive skill badge animations.
 */
export default function Skills() {
  const iconMap = {
    Code2,
    Layout,
    Wrench,
    Database,
    Brain,
  };

  const accentStyles = {
    primary: {
      bg: 'bg-primary/10',
      border: 'border-primary/20',
      text: 'text-primary',
      badge: 'primary',
    },
    cyan: {
      bg: 'bg-accent-cyan/10',
      border: 'border-accent-cyan/20',
      text: 'text-accent-cyan',
      badge: 'cyan',
    },
    emerald: {
      bg: 'bg-accent-emerald/10',
      border: 'border-accent-emerald/20',
      text: 'text-accent-emerald',
      badge: 'emerald',
    },
    amber: {
      bg: 'bg-accent-amber/10',
      border: 'border-accent-amber/20',
      text: 'text-accent-amber',
      badge: 'amber',
    },
    violet: {
      bg: 'bg-accent-violet/10',
      border: 'border-accent-violet/20',
      text: 'text-accent-violet',
      badge: 'violet',
    },
  };

  return (
    <section
      id="skills"
      className="py-20 md:py-28 border-b border-border-subtle relative overflow-hidden"
      aria-label="Technical Skills"
    >
      {/* Subtle Background Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container size="xl">
        <ScrollReveal>
          {/* Section Heading */}
          <SectionHeading
            badge="Technical Skills"
            badgeVariant="cyan"
            title="Core Technologies &"
            gradientTitle="Technical Toolkit"
            description="A structured overview of programming languages, frontend engineering tools, database systems, and active technical interests."
          />
        </ScrollReveal>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillsData.map((category, index) => {
            const Icon = iconMap[category.iconName] || Code2;
            const style = accentStyles[category.accent] || accentStyles.primary;

            return (
              <ScrollReveal key={category.category} delay={index * 80}>
                <Card
                  variant="interactive"
                  className="flex flex-col justify-between h-full group hover:-translate-y-1.5 hover:shadow-elevation transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${style.bg} border ${style.border} flex items-center justify-center ${style.text} group-hover:scale-105 transition-transform duration-200`}
                      >
                        <Icon size={20} />
                      </div>
                      <Badge variant={style.badge} size="sm">
                        {category.skills.length} Items
                      </Badge>
                    </div>

                    <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors">
                      {category.category}
                    </CardTitle>

                    <CardDescription className="text-xs sm:text-sm line-clamp-2">
                      {category.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group/item inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background-subtle hover:bg-background-elevated border border-border-subtle hover:border-primary/40 hover:shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-default"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-200 shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-text-primary group-hover/item:text-primary transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-text-muted">
                            {skill.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

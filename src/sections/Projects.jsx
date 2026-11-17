import React from 'react';
import {
  FolderGit2,
  FolderCode,
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Clock,
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
import { personalInfo, projectsData } from '../data/portfolioData';

/**
 * Projects Section Component.
 * Supports displaying real verified project cards when data exists,
 * or rendering a clean, professional empty state when projects are in active development.
 * Enhanced with ScrollReveal, interactive card hover lift, and responsive layout.
 */
export default function Projects() {
  const hasProjects = projectsData && projectsData.length > 0;

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
      id="projects"
      className="py-20 md:py-28 border-b border-border-subtle relative overflow-hidden"
      aria-label="Projects Showcase"
    >
      {/* Subtle Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-accent-cyan/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container size="xl">
        <ScrollReveal>
          {/* Section Heading */}
          <SectionHeading
            badge="Projects Showcase"
            badgeVariant="primary"
            title="Featured Work &"
            gradientTitle="Software Builds"
            description="A curated repository of software engineering applications, full-stack systems, and experimental implementations."
          />
        </ScrollReveal>

        {hasProjects ? (
          /* Rendered Project Cards Grid (when genuine projects are populated) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <ScrollReveal key={project.id || project.title} delay={index * 80}>
                <Card
                  variant="interactive"
                  className="flex flex-col justify-between h-full group hover:-translate-y-1.5 hover:shadow-elevation transition-all duration-300"
                >
                  <div>
                    {project.image && (
                      <div className="relative aspect-video w-full overflow-hidden bg-background-surface border-b border-border-subtle">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <CardHeader>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <CardTitle className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        {project.status && (
                          <Badge variant="primary" size="sm">
                            {project.status}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.technologies?.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-mono text-text-secondary bg-background-subtle border border-border-subtle"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  <CardFooter className="pt-4 border-t border-border-subtle">
                    <div className="flex items-center gap-3 w-full justify-between">
                      {project.githubUrl && (
                        <Button
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outline"
                          size="sm"
                          leftIcon={<Github size={14} />}
                        >
                          Source Code
                        </Button>
                      )}

                      {project.liveUrl && (
                        <Button
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="primary"
                          size="sm"
                          rightIcon={<ExternalLink size={14} />}
                        >
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          /* Professional Empty State with ScrollReveal and Subtle Interactivity */
          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <Card
                variant="interactive"
                className="p-4 sm:p-8 text-center relative overflow-hidden group hover:-translate-y-1 hover:shadow-elevation transition-all duration-300"
              >
                <CardContent className="space-y-6 pt-4">
                  {/* Visual Icon Badge with Pulse Glow */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/25 text-primary shadow-glow-primary mb-2 group-hover:scale-105 transition-transform duration-200">
                    <FolderCode size={32} />
                  </div>

                  {/* Status Indicator */}
                  <div>
                    <Badge variant="cyan" size="md" dot pulse className="mb-3">
                      Active Development
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                      Software Builds in Progress
                    </h3>
                    <p className="mt-2.5 text-body-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
                      Personal and academic software projects in Java, full-stack web development, and
                      applied AI/ML are currently being packaged, documented, and prepared for deployment.
                    </p>
                  </div>

                  {/* Upcoming Focus Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 max-w-2xl mx-auto text-left">
                    <div className="p-3.5 rounded-xl bg-background-subtle border border-border-subtle hover:border-primary/40 hover:scale-[1.02] transition-all duration-200">
                      <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold mb-1">
                        <Code2 size={15} />
                        <span>Java & OOP</span>
                      </div>
                      <p className="text-xs text-text-secondary">
                        Modular backend services and core programming architectures.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-background-subtle border border-border-subtle hover:border-accent-cyan/40 hover:scale-[1.02] transition-all duration-200">
                      <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan font-semibold mb-1">
                        <Layers size={15} />
                        <span>Full Stack</span>
                      </div>
                      <p className="text-xs text-text-secondary">
                        Modern React, Tailwind CSS, and database-backed web apps.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-background-subtle border border-border-subtle hover:border-accent-violet/40 hover:scale-[1.02] transition-all duration-200">
                      <div className="flex items-center gap-2 text-xs font-mono text-accent-violet font-semibold mb-1">
                        <Cpu size={15} />
                        <span>AI / ML</span>
                      </div>
                      <p className="text-xs text-text-secondary">
                        Exploratory machine learning implementations and models.
                      </p>
                    </div>
                  </div>

                  {/* Verified External Actions */}
                  <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-center gap-3.5">
                    <Button
                      href={personalInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      leftIcon={<Github size={16} />}
                      rightIcon={<ExternalLink size={14} />}
                      className="w-full sm:w-auto justify-center"
                    >
                      View GitHub Repositories
                    </Button>

                    <Button
                      href="#contact"
                      onClick={handleContactClick}
                      variant="outline"
                      size="md"
                      rightIcon={<ArrowRight size={15} />}
                      className="w-full sm:w-auto justify-center"
                    >
                      Contact For Collaborations
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

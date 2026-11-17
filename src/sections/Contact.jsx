import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Github,
  Linkedin,
  MessageSquare,
  User,
  Mail,
  FileText,
  Info,
  ArrowRight,
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
} from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { personalInfo } from '../data/portfolioData';

/**
 * Contact Section Component with Phase 9 Animation and Responsive Optimization.
 * Presents Chinni Chandra Sekhar's verified contact profiles (GitHub & LinkedIn)
 * alongside an accessible, validated contact form with real-time feedback.
 * Transparently indicates that the form is a frontend demonstration and directs visitors
 * to verified LinkedIn and GitHub channels for direct messaging.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isDemoSubmitted, setIsDemoSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Subtle tactile simulation before displaying demonstration state
      setTimeout(() => {
        setIsSubmitting(false);
        setIsDemoSubmitted(true);
      }, 400);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setIsDemoSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
      aria-label="Contact Section"
    >
      {/* Subtle Background Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container size="xl">
        <ScrollReveal>
          {/* Section Heading */}
          <SectionHeading
            badge="Contact"
            badgeVariant="primary"
            title="Connect &"
            gradientTitle="Collaborate"
            description="Open to software engineering opportunities, technical discussions, and academic collaborations."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Profile & Verified Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={100}>
              <Card variant="interactive" className="p-3 sm:p-6 group hover:-translate-y-1 hover:shadow-elevation transition-all duration-300">
                <CardHeader className="pb-3">
                  <Badge variant="primary" size="sm" className="mb-2 self-start">
                    Software Engineer
                  </Badge>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    {personalInfo.fullName}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-text-secondary mt-1">
                    {personalInfo.roles.join(' • ')}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 pt-2">
                  <div className="p-3.5 rounded-xl bg-background-subtle border border-border-subtle text-xs text-text-secondary">
                    <span className="font-mono uppercase text-text-muted text-[11px] block mb-1">
                      Academic Institution
                    </span>
                    <span className="font-semibold text-text-primary block break-words">
                      {personalInfo.education.institution}
                    </span>
                    <span className="text-text-muted block mt-0.5">
                      {personalInfo.education.degree} &bull; {personalInfo.education.status}
                    </span>
                  </div>

                  {/* Verified Channels */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase text-text-muted tracking-wider block">
                      Direct Verified Channels
                    </span>

                    {/* LinkedIn Channel */}
                    <a
                      href={personalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-background-subtle hover:bg-background-surface border border-border-subtle hover:border-primary/50 transition-all duration-200 group/link focus-visible:ring-2 focus-visible:ring-border-focus active:scale-[0.98]"
                      aria-label="Connect with Chinni Chandra Sekhar on LinkedIn"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover/link:scale-105 group-hover/link:shadow-glow-primary transition-all shrink-0">
                          <Linkedin size={20} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-sm font-semibold text-text-primary block group-hover/link:text-primary transition-colors">
                            LinkedIn
                          </span>
                          <span className="text-xs text-text-muted truncate block">
                            chinni-chandra-sekhar
                          </span>
                        </div>
                      </div>
                      <ExternalLink size={16} className="text-text-muted group-hover/link:text-primary transition-colors shrink-0 ml-2" />
                    </a>

                    {/* GitHub Channel */}
                    <a
                      href={personalInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-background-subtle hover:bg-background-surface border border-border-subtle hover:border-accent-cyan/50 transition-all duration-200 group/link focus-visible:ring-2 focus-visible:ring-border-focus active:scale-[0.98]"
                      aria-label="View Chinni Chandra Sekhar's GitHub Profile"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan group-hover/link:scale-105 group-hover/link:shadow-glow-accent transition-all shrink-0">
                          <Github size={20} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-sm font-semibold text-text-primary block group-hover/link:text-accent-cyan transition-colors">
                            GitHub
                          </span>
                          <span className="text-xs text-text-muted truncate block">
                            CHANDRASEKHAR23-8
                          </span>
                        </div>
                      </div>
                      <ExternalLink size={16} className="text-text-muted group-hover/link:text-accent-cyan transition-colors shrink-0 ml-2" />
                    </a>
                  </div>

                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/15 text-xs text-text-secondary leading-relaxed flex items-start gap-2.5">
                    <Info size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>
                      For inquiries, project collaborations, or technical discussions, reaching out
                      directly via LinkedIn or GitHub provides the quickest response.
                    </span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Right Column: Accessible Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={150}>
              <Card variant="default" className="p-3 sm:p-6 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-text-primary flex items-center gap-2">
                      <MessageSquare size={20} className="text-primary" />
                      <span>Send a Message</span>
                    </CardTitle>
                    <Badge variant="neutral" size="sm">
                      Interactive Form
                    </Badge>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-text-secondary">
                    Have a question or proposal? Complete the form fields below.
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-2">
                  {isDemoSubmitted ? (
                    /* Informational Submission Note & Demonstration Notice */
                    <div className="p-4 sm:p-6 rounded-xl bg-background-subtle border border-primary/30 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                      <div className="flex items-center gap-2 text-status-success font-semibold text-sm">
                        <CheckCircle2 size={18} />
                        <span>Form Input Validated</span>
                      </div>

                      <h4 className="text-lg font-bold text-text-primary">
                        Thank you, {formData.fullName}!
                      </h4>

                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                        Please note: this contact form currently operates as a <strong>frontend demonstration</strong>{' '}
                        as no backend mail delivery service is integrated. Your message has been validated successfully.
                      </p>

                      <div className="p-3 rounded-lg bg-background-elevated border border-border-subtle text-xs space-y-1">
                        <span className="font-mono text-text-muted block uppercase text-[10px]">
                          Message Preview
                        </span>
                        <div className="text-text-primary font-medium break-words">Subject: {formData.subject}</div>
                        <div className="text-text-secondary italic break-words">"{formData.message}"</div>
                      </div>

                      <p className="text-xs text-text-secondary">
                        To reach Chinni Chandra Sekhar directly, please use the verified channels below:
                      </p>

                      <div className="flex flex-wrap gap-2.5 pt-2">
                        <Button
                          href={personalInfo.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="primary"
                          size="sm"
                          rightIcon={<ExternalLink size={14} />}
                        >
                          Message on LinkedIn
                        </Button>

                        <Button
                          href={personalInfo.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outline"
                          size="sm"
                          rightIcon={<ExternalLink size={14} />}
                        >
                          View on GitHub
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleReset}
                        >
                          Reset Form
                        </Button>
                      </div>
                    </div>
                  ) : (
                    /* Accessible Form with Interactive Focus Rings & Tactile Feedback */
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      {/* Full Name Field */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-mono font-medium text-text-primary uppercase tracking-wider mb-1.5"
                        >
                          Full Name <span className="text-status-error">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          aria-invalid={!!errors.fullName}
                          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                          placeholder="Your Full Name"
                          className={`w-full px-3.5 py-2.5 rounded-lg text-base sm:text-sm bg-background-subtle border ${
                            errors.fullName
                              ? 'border-status-error focus-visible:ring-status-error'
                              : 'border-border-subtle focus-visible:border-primary'
                          } text-text-primary placeholder:text-text-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus:border-primary`}
                        />
                        {errors.fullName && (
                          <p id="fullName-error" className="mt-1 text-xs text-status-error flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                            <AlertCircle size={13} />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Address Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-mono font-medium text-text-primary uppercase tracking-wider mb-1.5"
                        >
                          Email Address <span className="text-status-error">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          placeholder="you@example.com"
                          className={`w-full px-3.5 py-2.5 rounded-lg text-base sm:text-sm bg-background-subtle border ${
                            errors.email
                              ? 'border-status-error focus-visible:ring-status-error'
                              : 'border-border-subtle focus-visible:border-primary'
                          } text-text-primary placeholder:text-text-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus:border-primary`}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-xs text-status-error flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                            <AlertCircle size={13} />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-xs font-mono font-medium text-text-primary uppercase tracking-wider mb-1.5"
                        >
                          Subject <span className="text-status-error">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          aria-invalid={!!errors.subject}
                          aria-describedby={errors.subject ? 'subject-error' : undefined}
                          placeholder="Project inquiry / Opportunity"
                          className={`w-full px-3.5 py-2.5 rounded-lg text-base sm:text-sm bg-background-subtle border ${
                            errors.subject
                              ? 'border-status-error focus-visible:ring-status-error'
                              : 'border-border-subtle focus-visible:border-primary'
                          } text-text-primary placeholder:text-text-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus:border-primary`}
                        />
                        {errors.subject && (
                          <p id="subject-error" className="mt-1 text-xs text-status-error flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                            <AlertCircle size={13} />
                            <span>{errors.subject}</span>
                          </p>
                        )}
                      </div>

                      {/* Message Field */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-mono font-medium text-text-primary uppercase tracking-wider mb-1.5"
                        >
                          Message <span className="text-status-error">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          placeholder="Write your message here..."
                          className={`w-full px-3.5 py-2.5 rounded-lg text-base sm:text-sm bg-background-subtle border ${
                            errors.message
                              ? 'border-status-error focus-visible:ring-status-error'
                              : 'border-border-subtle focus-visible:border-primary'
                          } text-text-primary placeholder:text-text-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus:border-primary resize-y`}
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-1 text-xs text-status-error flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                            <AlertCircle size={13} />
                            <span>{errors.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Notice & Submit Button */}
                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <p className="text-[11px] text-text-muted">
                          Frontend validated demonstration. No secrets or external APIs required.
                        </p>
                        <Button
                          type="submit"
                          variant="primary"
                          size="md"
                          isLoading={isSubmitting}
                          rightIcon={<Send size={15} />}
                          className="w-full sm:w-auto min-h-[44px]"
                        >
                          Send Message
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../../utils/cn';
import { personalInfo } from '../../data/portfolioData';

/**
 * SocialLinks component presenting verified social and profile links.
 *
 * @param {Object} props
 * @param {'default'|'pills'|'compact'} [props.variant='default']
 * @param {string} [props.className]
 */
export default function SocialLinks({ variant = 'default', className = '' }) {
  const links = [
    {
      name: 'GitHub',
      href: personalInfo.socialLinks.github,
      icon: Github,
      label: 'Visit GitHub Profile of Chinni Chandra Sekhar',
    },
    {
      name: 'LinkedIn',
      href: personalInfo.socialLinks.linkedin,
      icon: Linkedin,
      label: 'Visit LinkedIn Profile of Chinni Chandra Sekhar',
    },
  ];

  if (variant === 'pills') {
    return (
      <div className={cn('flex flex-wrap items-center gap-2.5', className)}>
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-text-secondary hover:text-text-primary bg-background-elevated hover:bg-background-surface border border-border-subtle hover:border-primary/50 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-border-focus"
            >
              <Icon size={14} className="text-primary" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-background-elevated border border-transparent hover:border-border-subtle transition-all duration-200 focus-visible:ring-2 focus-visible:ring-border-focus active:scale-95"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}

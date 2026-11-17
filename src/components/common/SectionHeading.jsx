import React from 'react';
import { cn } from '../../utils/cn';
import Badge from '../ui/Badge';

/**
 * Standardized Section Heading component for portfolio sections.
 *
 * @param {Object} props
 * @param {string|React.ReactNode} [props.badge] - Eyebrow category tag (e.g. "// EXPLORE")
 * @param {string} [props.badgeVariant='primary'] - Badge styling variant
 * @param {string} props.title - Primary heading text
 * @param {string} [props.gradientTitle] - Optional accent gradient portion of heading
 * @param {string} [props.description] - Subtitle or contextual description
 * @param {'left'|'center'|'right'} [props.align='left'] - Text alignment
 * @param {string} [props.className]
 */
export default function SectionHeading({
  badge,
  badgeVariant = 'primary',
  title,
  gradientTitle,
  description,
  align = 'left',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12', alignClasses[align], className)}>
      {badge && (
        <div className="mb-3">
          {typeof badge === 'string' ? (
            <Badge variant={badgeVariant} size="md" dot>
              {badge}
            </Badge>
          ) : (
            badge
          )}
        </div>
      )}
      <h2 className="text-h2 text-text-primary tracking-tight">
        {title}{' '}
        {gradientTitle && (
          <span className="text-gradient-accent">{gradientTitle}</span>
        )}
      </h2>
      {description && (
        <p className="mt-3 text-body-base text-text-secondary leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

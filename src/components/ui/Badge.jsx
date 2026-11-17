import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Reusable Badge component for technology tags, status indicators, and category labels.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge content
 * @param {'primary'|'cyan'|'emerald'|'violet'|'amber'|'rose'|'neutral'|'outline'} [props.variant='primary']
 * @param {'sm'|'md'} [props.size='md']
 * @param {boolean} [props.dot=false] - Display a status dot
 * @param {boolean} [props.pulse=false] - Add pulsing animation to dot
 * @param {React.ReactNode} [props.icon] - Optional leading icon
 * @param {string} [props.className]
 */
export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  pulse = false,
  icon = null,
  className = '',
  ...rest
}) {
  const variants = {
    primary:
      'bg-primary-subtle text-primary border-primary/25',
    cyan:
      'bg-accent-cyan-subtle text-accent-cyan border-accent-cyan/25',
    emerald:
      'bg-accent-emerald-subtle text-accent-emerald border-accent-emerald/25',
    violet:
      'bg-accent-violet-subtle text-accent-violet border-accent-violet/25',
    amber:
      'bg-accent-amber-subtle text-accent-amber border-accent-amber/25',
    rose:
      'bg-accent-rose-subtle text-accent-rose border-accent-rose/25',
    neutral:
      'bg-background-elevated text-text-secondary border-border-subtle',
    outline:
      'bg-transparent text-text-secondary border-border-light',
  };

  const dotColors = {
    primary: 'bg-primary',
    cyan: 'bg-accent-cyan',
    emerald: 'bg-accent-emerald',
    violet: 'bg-accent-violet',
    amber: 'bg-accent-amber',
    rose: 'bg-accent-rose',
    neutral: 'bg-text-muted',
    outline: 'bg-text-secondary',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 gap-1.5 font-mono',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-mono',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border tracking-wide uppercase select-none transition-colors duration-200',
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        className
      )}
      {...rest}
    >
      {dot && (
        <span className="relative flex h-2 w-2 items-center justify-center">
          {pulse && (
            <span
              className={cn(
                'absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping',
                dotColors[variant] || 'bg-primary'
              )}
            />
          )}
          <span
            className={cn(
              'relative inline-flex rounded-full h-1.5 w-1.5',
              dotColors[variant] || 'bg-primary'
            )}
          />
        </span>
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

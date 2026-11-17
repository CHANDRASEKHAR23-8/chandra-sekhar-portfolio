import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Main Card wrapper component with adaptive theme surfaces, borders, and smooth interaction states.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {'default'|'glass'|'interactive'|'bordered'} [props.variant='default']
 */
export default function Card({
  children,
  className = '',
  variant = 'default',
  ...rest
}) {
  const variants = {
    default:
      'bg-background-card border border-border-card rounded-xl shadow-subtle backdrop-blur-md transition-colors duration-200',
    glass:
      'glass-panel rounded-xl shadow-elevation',
    interactive:
      'bg-background-card border border-border-card hover:border-primary/50 rounded-xl transition-all duration-300 ease-out hover:shadow-elevation hover:-translate-y-1 will-change-[transform,box-shadow]',
    bordered:
      'bg-transparent border border-border-light hover:border-border-focus rounded-xl transition-colors duration-200',
  };

  return (
    <div
      className={cn(variants[variant] || variants.default, 'overflow-hidden', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...rest }) {
  return (
    <div className={cn('p-5 sm:p-6 pb-3', className)} {...rest}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '', as: Component = 'h3', ...rest }) {
  return (
    <Component
      className={cn('text-h3 font-semibold text-text-primary tracking-tight', className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function CardDescription({ children, className = '', ...rest }) {
  return (
    <p className={cn('text-body-sm text-text-secondary mt-1', className)} {...rest}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = '', ...rest }) {
  return (
    <div className={cn('p-5 sm:p-6 pt-3', className)} {...rest}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...rest }) {
  return (
    <div
      className={cn(
        'p-5 sm:p-6 pt-3 border-t border-border-subtle flex items-center justify-between',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

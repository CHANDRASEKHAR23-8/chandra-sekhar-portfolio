import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Reusable Button component supporting multiple design system variants, sizes,
 * loading states, tactile click animations, and icon integration.
 * Renders as a standard semantic <button> or an anchor <a> when href is provided.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button label or contents
 * @param {'primary'|'secondary'|'outline'|'ghost'|'accent'} [props.variant='primary']
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {React.ReactNode} [props.leftIcon] - Optional leading icon
 * @param {React.ReactNode} [props.rightIcon] - Optional trailing icon
 * @param {boolean} [props.isLoading=false] - Loading spinner state
 * @param {string} [props.href] - If supplied, renders as <a>
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.className]
 * @param {Function} [props.onClick]
 * @param {string} [props.type='button']
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon = null,
  rightIcon = null,
  isLoading = false,
  href,
  disabled = false,
  className = '',
  type = 'button',
  ...rest
}) {
  const isDisabled = disabled || isLoading;

  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.97] active:translate-y-0';

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-hover hover:-translate-y-0.5 shadow-subtle hover:shadow-glow-primary active:bg-primary-hover',
    secondary:
      'bg-background-elevated text-text-primary hover:bg-background-surface hover:-translate-y-0.5 border border-border-subtle hover:border-border-light shadow-subtle',
    outline:
      'bg-transparent text-text-primary border border-border-light hover:border-primary hover:text-primary hover:bg-primary-subtle hover:-translate-y-0.5',
    ghost:
      'bg-transparent text-text-secondary hover:text-text-primary hover:bg-background-elevated hover:-translate-y-0.5',
    accent:
      'bg-gradient-to-r from-primary to-accent-cyan text-white hover:opacity-95 hover:-translate-y-0.5 shadow-subtle hover:shadow-glow-accent',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 min-h-[36px] gap-1.5',
    md: 'text-sm px-4 py-2 min-h-[42px] gap-2',
    lg: 'text-base px-6 py-2.5 min-h-[46px] gap-2.5',
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className
  );

  const content = (
    <>
      {isLoading ? (
        <Loader2 size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} className="animate-spin shrink-0" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:scale-105">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{rightIcon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(combinedClasses, 'group')}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={cn(combinedClasses, 'group')}
      {...rest}
    >
      {content}
    </button>
  );
}

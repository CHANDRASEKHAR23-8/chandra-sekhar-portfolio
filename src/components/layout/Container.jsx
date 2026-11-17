import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Container component for consistent horizontal alignment, max-widths, and padding.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to be contained
 * @param {string} [props.className] - Additional custom classes
 * @param {string} [props.as='div'] - Semantic HTML tag to render
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size='xl'] - Max-width constraint
 */
export default function Container({
  children,
  className = '',
  as: Component = 'div',
  size = 'xl',
  ...rest
}) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn('w-full mx-auto px-4 sm:px-6 lg:px-8', sizeClasses[size], className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

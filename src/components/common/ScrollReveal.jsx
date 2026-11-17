import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { cn } from '../../utils/cn';

/**
 * ScrollReveal wrapper component.
 * Applies subtle, hardware-accelerated fade-up reveal animation when scrolled into view.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.as='div']
 * @param {'fade-up'|'fade-in'|'slide-up'} [props.variant='fade-up']
 * @param {number} [props.delay=0] - Delay in milliseconds (0, 100, 200, 300)
 */
export default function ScrollReveal({
  children,
  className = '',
  as: Component = 'div',
  variant = 'fade-up',
  delay = 0,
  ...rest
}) {
  const [ref, isRevealed] = useScrollReveal();

  const delayStyles = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Component
      ref={ref}
      style={delayStyles}
      className={cn(
        'transition-all duration-700 ease-out will-change-[opacity,transform]',
        isRevealed
          ? 'opacity-100 translate-y-0'
          : variant === 'fade-in'
          ? 'opacity-0'
          : 'opacity-0 translate-y-6',
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

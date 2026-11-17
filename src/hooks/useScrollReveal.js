import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight custom hook for scroll-triggered reveal animations using IntersectionObserver.
 * Fired once when element enters the viewport, causing zero ongoing scroll overhead.
 * Automatically respects user's prefers-reduced-motion accessibility preference.
 *
 * @param {Object} [options]
 * @param {number} [options.threshold=0.1]
 * @param {string} [options.rootMargin='0px 0px -40px 0px']
 * @returns {[React.RefObject, boolean]} [ref, isRevealed]
 */
export function useScrollReveal({
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
} = {}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // If the browser does not support IntersectionObserver or user prefers reduced motion, reveal immediately
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsRevealed(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, rootMargin]);

  return [ref, isRevealed];
}

export default useScrollReveal;

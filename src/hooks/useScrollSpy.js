import { useState, useEffect } from 'react';

/**
 * Custom hook to track active section based on scroll position.
 * Foundation hook for smooth single-page portfolio navigation in future phases.
 *
 * @param {string[]} sectionIds - Array of DOM element IDs to spy on
 * @param {number} [offset=100] - Offset in pixels
 * @returns {string} activeId - ID of currently active section
 */
export function useScrollSpy(sectionIds = [], offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!sectionIds.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            return;
          }
        }
      }

      setActiveId(sectionIds[0] || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}

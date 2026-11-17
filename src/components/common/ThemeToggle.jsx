import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../utils/cn';

/**
 * Accessible Theme Toggle button for switching between Dark and Light mode.
 * Connected to unified ThemeContext single source of truth.
 *
 * @param {Object} props
 * @param {string} [props.className]
 * @param {boolean} [props.showLabel=false]
 */
export default function ThemeToggle({ className = '', showLabel = false }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode (currently ${theme} mode)`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={cn(
        'relative inline-flex items-center justify-center p-2 rounded-lg',
        'text-text-secondary hover:text-text-primary',
        'bg-background-elevated hover:bg-background-surface border border-border-subtle hover:border-border-light',
        'transition-all duration-200 focus-visible:ring-2 focus-visible:ring-border-focus active:scale-95 cursor-pointer',
        className
      )}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          size={18}
          className={cn(
            'absolute transition-all duration-300 transform',
            isDark
              ? 'opacity-0 rotate-90 scale-0 text-text-muted pointer-events-none'
              : 'opacity-100 rotate-0 scale-100 text-amber-500'
          )}
        />
        <Moon
          size={18}
          className={cn(
            'absolute transition-all duration-300 transform',
            isDark
              ? 'opacity-100 rotate-0 scale-100 text-primary-400'
              : 'opacity-0 -rotate-90 scale-0 text-text-muted pointer-events-none'
          )}
        />
      </div>
      {showLabel && (
        <span className="ml-2 text-xs font-mono font-medium text-text-primary">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
      <span className="sr-only">Toggle Dark/Light Mode</span>
    </button>
  );
}

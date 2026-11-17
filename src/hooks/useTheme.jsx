import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'cs-portfolio-theme';
const LEGACY_STORAGE_KEY = 'theme';

const ThemeContext = createContext(null);

/**
 * Reads initial theme from localStorage or system preference.
 * Defaults reliably to 'dark'.
 */
function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {
    // Ignore localStorage read errors
  }
  return 'dark';
}

/**
 * Applies theme directly and synchronously to document root.
 * Updates data-theme attribute, classList, and CSS color-scheme.
 */
function applyThemeToDocument(theme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  // Set the primary data-theme attribute
  root.setAttribute('data-theme', theme);

  // Synchronize CSS class for Tailwind and third-party compatibility
  if (theme === 'light') {
    root.classList.remove('dark');
    root.classList.add('light');
    root.style.colorScheme = 'light';
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
    root.style.colorScheme = 'dark';
  }

  // Persist to localStorage
  try {
    localStorage.setItem(STORAGE_KEY, theme);
    localStorage.setItem(LEGACY_STORAGE_KEY, theme);
  } catch {
    // Ignore localStorage write errors
  }
}

/**
 * Unified ThemeProvider for the application.
 * Manages single source of truth for dark/light mode across the entire component tree.
 */
export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);

  // Apply theme to DOM immediately upon state change
  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Explicit theme setter
  const setTheme = (newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setThemeState(newTheme);
    }
  };

  const value = {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to consume the unified ThemeContext.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default useTheme;

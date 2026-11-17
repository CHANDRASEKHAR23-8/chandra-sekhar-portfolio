import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import { ThemeProvider } from './hooks/useTheme';

/**
 * Root Application Component.
 * Wraps the entire component tree in ThemeProvider for a single source of truth.
 * Assembles Navbar, Main Content (HomePage), and Footer.
 * Configured with responsive boundary safeguards to completely prevent horizontal overflow.
 */
export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-background text-text-primary selection:bg-primary-subtle selection:text-primary transition-colors duration-200">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

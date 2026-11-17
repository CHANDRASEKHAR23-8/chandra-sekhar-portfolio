import { createServer } from 'vite';
import fs from 'fs';

async function verify() {
  console.log('--- Commencing Comprehensive Phase 9 Architecture & Animation Verification ---');

  // Initialize Vite in middleware mode to test compilation pipeline cleanly
  const server = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  console.log('✓ Vite compilation engine initialized successfully.');

  // Validate index.html transformation
  const rawHtml = fs.readFileSync('./index.html', 'utf-8');
  const transformedHtml = await server.transformIndexHtml('/', rawHtml);
  if (transformedHtml.includes('@vite/client') && transformedHtml.includes('/src/main.jsx')) {
    console.log('✓ index.html transformed with Vite client injection.');
  } else {
    throw new Error('index.html transformation failed to inject Vite runtime.');
  }

  // Validate all React JSX components, sections, hooks, context, and styles
  const modulesToVerify = [
    '/src/main.jsx',
    '/src/App.jsx',
    '/src/pages/HomePage.jsx',
    '/src/sections/Hero.jsx',
    '/src/sections/About.jsx',
    '/src/sections/Skills.jsx',
    '/src/sections/Projects.jsx',
    '/src/sections/Education.jsx',
    '/src/sections/Experience.jsx',
    '/src/sections/Certifications.jsx',
    '/src/sections/Contact.jsx',
    '/src/sections/index.js',
    '/src/components/layout/Navbar.jsx',
    '/src/components/layout/Footer.jsx',
    '/src/components/layout/Container.jsx',
    '/src/components/ui/Container.jsx',
    '/src/components/ui/Button.jsx',
    '/src/components/ui/Card.jsx',
    '/src/components/ui/Badge.jsx',
    '/src/components/common/SectionHeading.jsx',
    '/src/components/ui/SectionHeading.jsx',
    '/src/components/common/ScrollReveal.jsx',
    '/src/components/common/SocialLinks.jsx',
    '/src/components/common/ThemeToggle.jsx',
    '/src/hooks/useTheme.jsx',
    '/src/hooks/useTheme.js',
    '/src/hooks/useScrollSpy.js',
    '/src/hooks/useScrollReveal.js',
    '/src/data/portfolioData.js',
    '/src/utils/cn.js',
    '/src/styles/variables.css',
    '/src/styles/index.css',
  ];

  for (const mod of modulesToVerify) {
    const result = await server.transformRequest(mod);
    if (!result || !result.code) {
      throw new Error(`Failed to compile module: ${mod}`);
    }
    console.log(`✓ Module compiled successfully: ${mod} (${result.code.length} bytes)`);
  }

  await server.close();
  console.log('--- All Phase 9 Modules, Sections, and Components Verified (100% Pass) ---');
}

verify().catch((err) => {
  console.error('Verification failed:', err);
  process.exit(1);
});

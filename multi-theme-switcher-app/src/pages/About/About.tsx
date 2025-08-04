import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './About.module.css';

const About: React.FC = () => {
  

  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>About Multi-Theme Switcher</h1>
          <p className={styles.subtitle}>
            A showcase of dynamic theming in React applications
          </p>
        </header>

        <section className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>What is this?</h2>
            <p className={styles.text}>
              This Multi-Theme Switcher application demonstrates how to implement 
              dynamic theming in React applications. It goes beyond simple color 
              changes to showcase how themes can completely transform the user 
              experience through different layouts, typography, spacing, and animations.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <strong>Three Distinct Themes:</strong> Each theme offers a completely 
                different visual and structural experience.
              </li>
              <li className={styles.featureItem}>
                <strong>Persistent Theme Selection:</strong> Your theme choice is 
                saved in localStorage and restored on page reload.
              </li>
              <li className={styles.featureItem}>
                <strong>Responsive Design:</strong> All themes work seamlessly 
                across desktop, tablet, and mobile devices.
              </li>
              <li className={styles.featureItem}>
                <strong>Smooth Animations:</strong> Theme transitions include 
                subtle animations for a polished user experience.
              </li>
              <li className={styles.featureItem}>
                <strong>API Integration:</strong> Real product data from 
                fakestoreapi.com with proper error handling.
              </li>
              <li className={styles.featureItem}>
                <strong>TypeScript:</strong> Fully typed for better development 
                experience and code reliability.
              </li>
            </ul>
          </div>

          <div className={styles.themeShowcase}>
            <h2 className={styles.sectionTitle}>Theme Showcase</h2>
            <div className={styles.themeGrid}>
              <div className={styles.themeCard}>
                <h3 className={styles.themeName}>Theme 1: Minimalist</h3>
                <p className={styles.themeDescription}>
                  Clean and professional design with light colors, Inter font, 
                  and plenty of white space for optimal readability.
                </p>
                <div className={styles.themeFeatures}>
                  <span className={styles.tag}>Light Mode</span>
                  <span className={styles.tag}>Sans-serif</span>
                  <span className={styles.tag}>Simple Layout</span>
                </div>
              </div>

              <div className={styles.themeCard}>
                <h3 className={styles.themeName}>Theme 2: Dark Sidebar</h3>
                <p className={styles.themeDescription}>
                  Sophisticated dark theme with sidebar navigation, Playfair Display 
                  font, and warm accent colors for a premium feel.
                </p>
                <div className={styles.themeFeatures}>
                  <span className={styles.tag}>Dark Mode</span>
                  <span className={styles.tag}>Serif Font</span>
                  <span className={styles.tag}>Sidebar Layout</span>
                </div>
              </div>

              <div className={styles.themeCard}>
                <h3 className={styles.themeName}>Theme 3: Colorful Cards</h3>
                <p className={styles.themeDescription}>
                  Vibrant and playful design with card-based grid layout, 
                  Pacifico font, and bright colors for a fun, engaging experience.
                </p>
                <div className={styles.themeFeatures}>
                  <span className={styles.tag}>Colorful</span>
                  <span className={styles.tag}>Playful Font</span>
                  <span className={styles.tag}>Card Grid</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Implementation</h2>
            <p className={styles.text}>
              This application uses React Context API for theme management, 
              CSS Modules for component-scoped styling, and CSS custom properties 
              for dynamic theme switching. The theme system is fully typed with 
              TypeScript and includes proper error handling and loading states.
            </p>
            
            <div className={styles.techStack}>
              <h3 className={styles.techTitle}>Tech Stack</h3>
              <div className={styles.techGrid}>
                <span className={styles.techItem}>React 18</span>
                <span className={styles.techItem}>TypeScript</span>
                <span className={styles.techItem}>React Router</span>
                <span className={styles.techItem}>CSS Modules</span>
                <span className={styles.techItem}>Context API</span>
                <span className={styles.techItem}>localStorage</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Architecture Overview</h2>
            <div className={styles.architectureGrid}>
              <div className={styles.archCard}>
                <h4 className={styles.archTitle}>Theme Management</h4>
                <p className={styles.archDescription}>
                  Centralized theme state using React Context API with TypeScript 
                  interfaces for type safety and auto-completion.
                </p>
              </div>
              <div className={styles.archCard}>
                <h4 className={styles.archTitle}>CSS Custom Properties</h4>
                <p className={styles.archDescription}>
                  Dynamic styling using CSS variables that are updated in real-time 
                  when themes change, enabling smooth transitions.
                </p>
              </div>
              <div className={styles.archCard}>
                <h4 className={styles.archTitle}>Component Architecture</h4>
                <p className={styles.archDescription}>
                  Modular components with CSS Modules for scoped styling and 
                  consistent theme application across all UI elements.
                </p>
              </div>
              <div className={styles.archCard}>
                <h4 className={styles.archTitle}>State Persistence</h4>
                <p className={styles.archDescription}>
                  Theme preferences saved to localStorage with custom React hook 
                  for seamless user experience across sessions.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Performance & Security</h2>
            <div className={styles.performanceGrid}>
              <div className={styles.perfCard}>
                <h4 className={styles.perfTitle}>⚡ Fast Loading</h4>
                <p className={styles.perfText}>
                  Optimized bundle size, lazy loading, and efficient re-renders
                </p>
              </div>
              <div className={styles.perfCard}>
                <h4 className={styles.perfTitle}>🔒 Type Safety</h4>
                <p className={styles.perfText}>
                  Full TypeScript implementation with strict type checking
                </p>
              </div>
              <div className={styles.perfCard}>
                <h4 className={styles.perfTitle}>📱 Responsive</h4>
                <p className={styles.perfText}>
                  Mobile-first design that works across all device sizes
                </p>
              </div>
              <div className={styles.perfCard}>
                <h4 className={styles.perfTitle}>♿ Accessible</h4>
                <p className={styles.perfText}>
                  WCAG compliant with proper ARIA labels and keyboard navigation
                </p>
              </div>
            </div>
          </div>

          <div className={styles.callToAction}>
            <h2 className={styles.ctaTitle}>Ready to Explore?</h2>
            <p className={styles.ctaText}>
              Try switching between the different themes using the dropdown in the header. 
              Notice how each theme completely transforms the application's look and feel!
            </p>
            <div className={styles.ctaButtons}>
              <a href="/" className={styles.ctaButton}>
                Go to Home
              </a>
              <a href="/contact" className={styles.ctaButtonSecondary}>
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
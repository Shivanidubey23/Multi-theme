import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../Header/Header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { themeConfig, currentTheme, isLoading } = useTheme();

  return (
    <div className={`${styles.layout} ${styles[`layout${currentTheme.charAt(currentTheme.length - 1)}`]}`}>
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingSpinner}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Switching theme...</p>
          </div>
        </div>
      )}

      <Header />

      {currentTheme === 'theme2' && (
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Navigation</h3>
              <nav className={styles.sidebarNav}>
                <a href="/" className={styles.sidebarLink}>Home</a>
                <a href="/about" className={styles.sidebarLink}>About</a>
                <a href="/contact" className={styles.sidebarLink}>Contact</a>
              </nav>
            </div>

            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Quick Stats</h3>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Current Theme:</span>
                <span className={styles.statValue}>{themeConfig.name}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Layout:</span>
                <span className={styles.statValue}>Sidebar</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Font:</span>
                <span className={styles.statValue}>Serif</span>
              </div>
            </div>

            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Theme Info</h3>
              <p className={styles.sidebarDescription}>
                This dark sidebar theme provides a professional and elegant 
                layout perfect for content-heavy applications.
              </p>
            </div>
          </div>
        </aside>
      )}

      <main className={styles.main}>
        <div className={styles.mainContent}>
          {children}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            © 2025 Multi-Theme Switcher App. Built with React & TypeScript.
          </p>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>Privacy Policy</a>
            <a href="#" className={styles.footerLink}>Terms of Service</a>
            <a href="#" className={styles.footerLink}>Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { APP_NAME, NAVIGATION_ITEMS } from '../../utils/constant';
import ThemeDropdown from '../ThemeDropdown/ThemeDropdown';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { themeConfig } = useTheme();
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <h1 className={styles.logoText}>{APP_NAME}</h1>
          </Link>
        </div>

        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.path} className={styles.navItem}>
                <Link
                  to={item.path}
                  className={`${styles.navLink} ${
                    location.pathname === item.path ? styles.navLinkActive : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.themeDropdownContainer}>
          <ThemeDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
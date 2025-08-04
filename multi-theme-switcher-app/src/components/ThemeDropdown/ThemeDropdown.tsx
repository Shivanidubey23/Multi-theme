import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { THEMES } from '../../utils/constant';
import { ThemeType } from '../../types/theme';
import styles from './ThemeDropdown.module.css';

const ThemeDropdown: React.FC = () => {
  const { currentTheme, switchTheme, isLoading } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeSelect = (theme: ThemeType) => {
    switchTheme(theme);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent, theme?: ThemeType) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (theme) {
        handleThemeSelect(theme);
      } else {
        toggleDropdown();
      }
    }
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={`${styles.dropdownButton} ${isLoading ? styles.loading : ''}`}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        disabled={isLoading}
      >
        <span className={styles.buttonText}>
          {THEMES[currentTheme].name}
        </span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : styles.arrowDown}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu} role="listbox">
          {Object.entries(THEMES).map(([key, theme]) => (
            <button
              key={key}
              className={`${styles.dropdownItem} ${
                currentTheme === key ? styles.dropdownItemActive : ''
              }`}
              onClick={() => handleThemeSelect(key as ThemeType)}
              onKeyDown={(e) => handleKeyDown(e, key as ThemeType)}
              role="option"
              aria-selected={currentTheme === key}
            >
              <span className={styles.themeName}>{theme.name}</span>
              <div className={styles.themePreview}>
                <span 
                  className={styles.colorPreview} 
                  style={{ backgroundColor: theme.colors.primary }}
                />
                <span 
                  className={styles.colorPreview} 
                  style={{ backgroundColor: theme.colors.secondary }}
                />
                <span 
                  className={styles.colorPreview} 
                  style={{ backgroundColor: theme.colors.accent }}
                />
              </div>
            </button>
          ))}
        </div>
      )}

      {isOpen && <div className={styles.backdrop} onClick={() => setIsOpen(false)} />}
    </div>
  );
};

export default ThemeDropdown;
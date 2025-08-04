import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeType, ThemeContextType, ThemeConfig } from '../types/theme';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { THEMES, DEFAULT_THEME, THEME_STORAGE_KEY } from '../utils/constant';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage<ThemeType>(THEME_STORAGE_KEY, DEFAULT_THEME);
  const [isLoading, setIsLoading] = useState(true);
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(THEMES[DEFAULT_THEME]);

  const switchTheme = (theme: ThemeType) => {
    setIsLoading(true);
    
    // Add a small delay for smooth transition animation
    setTimeout(() => {
      setCurrentTheme(theme);
      setThemeConfig(THEMES[theme]);
      applyThemeToDOM(THEMES[theme]);
      setIsLoading(false);
    }, 100);
  };

  const applyThemeToDOM = (config: ThemeConfig) => {
    const root = document.documentElement;
    
    // Apply CSS custom properties to the root element
    Object.entries(config.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    Object.entries(config.fonts.sizes).forEach(([key, value]) => {
      root.style.setProperty(`--font-size-${key}`, value);
    });

    Object.entries(config.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    Object.entries(config.layout).forEach(([key, value]) => {
      root.style.setProperty(`--layout-${key}`, value);
    });

    // Apply font families
    root.style.setProperty('--font-primary', config.fonts.primary);
    root.style.setProperty('--font-secondary', config.fonts.secondary);
    
    // Apply animation properties
    root.style.setProperty('--transition', config.animations.transition);
    root.style.setProperty('--duration', config.animations.duration);

    // Add theme class to body for additional styling
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${config.id}`);
  };

  useEffect(() => {
    // Initialize theme on mount
    const initialConfig = THEMES[currentTheme];
    setThemeConfig(initialConfig);
    applyThemeToDOM(initialConfig);
    
    // Small delay to prevent flash of unstyled content
    setTimeout(() => {
      setIsLoading(false);
    }, 150);
  }, [currentTheme]);

  const value: ThemeContextType = {
    currentTheme,
    themeConfig,
    switchTheme,
    isLoading,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
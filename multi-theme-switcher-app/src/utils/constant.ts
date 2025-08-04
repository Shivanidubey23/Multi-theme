import { ThemeConfig } from '../types/theme';

export const THEME_STORAGE_KEY = 'multi-theme-switcher-theme';

export const API_ENDPOINTS = {
  PRODUCTS: 'https://fakestoreapi.com/products',
  PRODUCTS_LIMIT: (limit: number) => `https://fakestoreapi.com/products?limit=${limit}`,
};

export const THEMES: Record<string, ThemeConfig> = {
  theme1: {
    id: 'theme1',
    name: 'Minimalist',
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
      accent: '#3b82f6',
    },
    fonts: {
      primary: "'Inter', sans-serif",
      secondary: "'Inter', sans-serif",
      sizes: {
        small: '0.875rem',
        medium: '1rem',
        large: '1.25rem',
        xlarge: '2rem',
      },
    },
    spacing: {
      small: '0.5rem',
      medium: '1rem',
      large: '1.5rem',
      xlarge: '3rem',
    },
    layout: {
      maxWidth: '1200px',
      headerHeight: '64px',
      sidebarWidth: '0px',
      borderRadius: '8px',
    },
    animations: {
      transition: 'all 0.3s ease',
      duration: '300ms',
    },
  },
  theme2: {
    id: 'theme2',
    name: 'Dark Sidebar',
    colors: {
      primary: '#f59e0b',
      secondary: '#d97706',
      background: '#111827',
      surface: '#1f2937',
      text: '#f9fafb',
      textSecondary: '#d1d5db',
      border: '#374151',
      accent: '#fbbf24',
    },
    fonts: {
      primary: "'Playfair Display', serif",
      secondary: "'Inter', sans-serif",
      sizes: {
        small: '0.875rem',
        medium: '1.125rem',
        large: '1.5rem',
        xlarge: '2.5rem',
      },
    },
    spacing: {
      small: '0.75rem',
      medium: '1.25rem',
      large: '2rem',
      xlarge: '4rem',
    },
    layout: {
      maxWidth: '100%',
      headerHeight: '80px',
      sidebarWidth: '280px',
      borderRadius: '12px',
    },
    animations: {
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      duration: '400ms',
    },
  },
  theme3: {
    id: 'theme3',
    name: 'Colorful Cards',
    colors: {
      primary: '#ec4899',
      secondary: '#8b5cf6',
      background: '#fef3c7',
      surface: '#ffffff',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#fbbf24',
      accent: '#06d6a0',
    },
    fonts: {
      primary: "'Pacifico', cursive",
      secondary: "'Inter', sans-serif",
      sizes: {
        small: '0.875rem',
        medium: '1rem',
        large: '1.375rem',
        xlarge: '2.25rem',
      },
    },
    spacing: {
      small: '0.75rem',
      medium: '1.5rem',
      large: '2.5rem',
      xlarge: '4rem',
    },
    layout: {
      maxWidth: '1400px',
      headerHeight: '72px',
      sidebarWidth: '0px',
      borderRadius: '20px',
    },
    animations: {
      transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      duration: '500ms',
    },
  },
};

export const DEFAULT_THEME = 'theme1';

export const APP_NAME = 'Multi-Theme Switcher';

export const NAVIGATION_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];
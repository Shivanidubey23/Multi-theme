export interface ThemeConfig {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    accent: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  layout: {
    maxWidth: string;
    headerHeight: string;
    sidebarWidth: string;
    borderRadius: string;
  };
  animations: {
    transition: string;
    duration: string;
  };
}

export type ThemeType = 'theme1' | 'theme2' | 'theme3';

export interface ThemeContextType {
  currentTheme: ThemeType;
  themeConfig: ThemeConfig;
  switchTheme: (theme: ThemeType) => void;
  isLoading: boolean;
}
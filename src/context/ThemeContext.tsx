import React, { createContext, useState, ReactNode, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DARK_THEME, LIGHT_THEME } from '../constants/themeConstants';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: LIGHT_THEME,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(
    () => window.localStorage.getItem('themeMode') || LIGHT_THEME
  );

  useEffect(() => {
    window.localStorage.setItem('themeMode', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

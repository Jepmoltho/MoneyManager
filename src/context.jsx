import React, { createContext, useState } from "react";

// Create a new context
const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Provide the context value to the children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to consume the context
export function useTheme() {
  return React.useContext(ThemeContext);
}

/*
import React, { createContext, useState } from "react";

interface ColorContextValue {
  theme: string;
  toggleTheme: () => void;
}

//Creating a new context
const ColorContext = createContext<ColorContextValue | undefined>(undefined);

//Provider component
export function ThemeProvider({children}: )
*/

/*
import React, { createContext, useState } from 'react';

interface ThemeContextValue {
  theme: string;
  toggleTheme: () => void;
}

// Create a new context
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// Create a provider component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provide the context value to the children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to consume the context
export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

*/

/*
import React, { createContext, useState } from 'react';

// Create a new context
const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provide the context value to the children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to consume the context
export function useTheme() {
  return React.useContext(ThemeContext);
}

*/

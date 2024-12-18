import React, { createContext, useContext, useState } from "react";

interface IThemeProvider {
  children: React.ReactNode;
}
interface IThemeContext {
  theme: string;
  toggleTheme: (newTheme: string) => void;
}

const Theme = createContext<IThemeContext | null>(null);

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = (newTheme: string) => {
    return setTheme(newTheme);
  };
  return (
    <Theme.Provider value={{ theme, toggleTheme }}>{children}</Theme.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(Theme);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;

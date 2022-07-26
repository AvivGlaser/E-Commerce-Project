import React, { createContext, useState } from "react";

const ThemeContext = createContext({});

function ThemeContextProvider(props) {
  const initialState: string | null = localStorage.getItem("Theme")
  const [theme, setTheme] = useState(initialState? initialState : "light")
  localStorage.setItem("Theme", theme);
  
  function toggleTheme() {
    setTheme(theme=== "light" ? "dark" : "light")
  }
  
  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
          {props.children}
      </ThemeContext.Provider>
  )
}

export {ThemeContextProvider, ThemeContext}
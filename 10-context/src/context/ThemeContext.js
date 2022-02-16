import {createContext} from "react";

const ThemeContext = createContext();

export const ThemeProvider = () => {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>  
}

export default ThemeContext;


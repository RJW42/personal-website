import React, { ReactNode } from 'react';


type Theme = 'light' | 'dark';


const ThemeContext = React.createContext({
   theme: 'light',
   setTheme: (theme: Theme) => {} 
});


const ThemeProvider = ({children} : {children: ReactNode}) => {
   const [theme, setTheme] = React.useState('light');

   return (
      <ThemeContext.Provider value={{
         theme: theme,
         setTheme: setTheme  
      }}>
         {children}
      </ThemeContext.Provider>
   );
}


const useTheme = () => {
   const val = React.useContext(ThemeContext);

   return {
      theme: val.theme,
      toggleTheme: () => {
         val.setTheme(val.theme === 'light' ? 'dark' : 'light');
      }
   };
}


export {ThemeProvider, useTheme}
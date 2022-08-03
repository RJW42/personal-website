import React, { ReactNode } from 'react';
import {Helmet} from 'react-helmet';


type Theme = 'light' | 'dark';


const ThemeContext = React.createContext({
   theme: 'light',
   setTheme: (theme: Theme) => {} 
});


const ThemeProvider = ({children} : {children: ReactNode}) => {
   const [theme, setTheme] = React.useState('light');
   const body = 'body { background-color: var(--' + 
      (theme === 'light' ? 'body-light' : 'body-dark') + 
      ') }'; 

   return (
      <ThemeContext.Provider value={{
         theme: theme,
         setTheme: setTheme  
      }}>
         <Helmet>
            <style>{
               body
            }</style>
         </Helmet>
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


const useThemeChoise = <L, R>(ifLight: L, ifDark: R) => {
   const {theme} = useTheme();

   return (theme === 'light') ? ifLight : ifDark;
}


export {ThemeProvider, useTheme, useThemeChoise}
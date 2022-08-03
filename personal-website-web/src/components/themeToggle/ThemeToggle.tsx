import React from "react";
import {useTheme} from "../../hooks";
import TextTransition, { presets } from "react-text-transition";


const ThemeToggle = ({className}: {className?: string}) => {
   const {theme, toggleTheme} = useTheme();
   className = "clickable " + (className ? className : "");

   return (
      <div 
         className={className}
         onClick={toggleTheme}
      >
         <TextTransition 
            springConfig={presets.gentle}
            style={{marginRight: "1em"}}
            inline
         >
            {"Theme " + theme.charAt(0).toUpperCase() + theme.slice(1)}
         </TextTransition>
      </div>
   );
}

export {ThemeToggle};
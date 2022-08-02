import React from 'react';
import { PClassName } from '../../types/Props';
import { useTheme } from '../../hooks';
import { ToggleSwitch } from '../toggleSwitch/ToggleSwitch';


const ThemeToggle = ({className} : PClassName) => {
   className = className ? className : "";
   const { toggleTheme } = useTheme();
   

   return (
      <ToggleSwitch 
         name="theme-toggle"
         className={" " + className}
      />
   )
}

export {ThemeToggle};
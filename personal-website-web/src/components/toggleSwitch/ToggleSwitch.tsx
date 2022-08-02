import React from 'react';
import { PClassName } from '../../types/Props';


const ToggleSwitch = ({name, className} : {name: string} & PClassName) => {
   className = className ? className : "";

   return (
      <div className={"toggle-switch " + className}>
         <input
            type="checkbox"
            className="toggle-switch-checkbox"
            name={name}
            id={name}
         />
         <label 
            className="toggle-switch-label" 
            htmlFor={name}
         >
            <span className="toggle-switch-inner" />
            <span className="toggle-switch-switch" />
        </label>
      </div>
    );
}


export {ToggleSwitch};
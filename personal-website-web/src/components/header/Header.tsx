import React from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeToggle } from '../';
import { useThemeChoise } from '../../hooks';


type Link = {
  name: string;
  url: string;
}

const Header = ({links} : {links: Link[]}) => {
  const color = useThemeChoise('bg-light', 'bg-dark');

  return (
    <div className={'header absolute flex row jc-center ai-center width-100 ' + color}>
      { links.map(link => 
        <NavLink 
          className='element navlink clickable clean-link'
          to={link.url}
        >
          {link.name}
        </NavLink>
      )}
      <ThemeToggle 
        className='element float-right theme-toggle-container'
      />
    </div>
  );
};


export {Header};

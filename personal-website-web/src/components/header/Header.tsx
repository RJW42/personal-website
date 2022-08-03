import React from 'react';
import { ThemeToggle } from '../';


const Header = () => {
  const links = ['About', 'Projects', 'CV', 'Contact Me'];

  return (
    <div className='header absolute flex row jc-center width-100'>
      { links.map(link => 
        <div className='element clickable'>
          {link}
        </div>
      )}
      <ThemeToggle 
        className='element float-right theme-toggle-container'
      />
    </div>
  );
};


export {Header};

import React from 'react';
import { useTheme } from '../../hooks';

const Header = () => {
  const {toggleTheme} = useTheme();
  const links = ['About', 'Projects', 'CV', 'Contact Me'];

  return (
    <div className='header flex row jc-center width-100'>
      { links.map(link => 
        <div className='element mlr-1em'>
          {link}
        </div>
      )}
    </div>
  );
};


export {Header};

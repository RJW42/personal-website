import React from 'react';
import { useTheme } from '../../hooks';

const Header = () => {
  const {toggleTheme} = useTheme();

  return (
    <>
      <h2> Header </h2>
      <button onClick={() => toggleTheme()}></button>
    </>
  );
};


export {Header};

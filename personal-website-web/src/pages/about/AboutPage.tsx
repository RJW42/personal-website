import React from 'react';
import { useTheme } from '../../hooks';


const AboutPage = () => {
  const {theme} = useTheme();

  return (
    <>
      <h1>About Page: {theme} </h1>
    </>
  );
};


export {AboutPage};

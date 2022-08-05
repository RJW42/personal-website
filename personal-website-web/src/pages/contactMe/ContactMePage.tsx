import React from 'react';
import { useTheme } from '../../hooks';


const ContactMePage = () => {
  const {theme} = useTheme();

  return (
    <>
      <h1>Contact Me Page: {theme} </h1>
    </>
  );
};


export {ContactMePage};

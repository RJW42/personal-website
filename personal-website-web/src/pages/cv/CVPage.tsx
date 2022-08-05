import React from 'react';
import { useTheme } from '../../hooks';


const CVPage = () => {
  const {theme} = useTheme();

  return (
    <>
      <h1>CV Page: {theme} </h1>
    </>
  );
};


export {CVPage};

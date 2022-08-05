import React from 'react';
import { useTheme } from '../../hooks';


const ProjectsPage = () => {
  const {theme} = useTheme();

  return (
    <>
      <h1>Projects Page: {theme} </h1>
    </>
  );
};


export {ProjectsPage};

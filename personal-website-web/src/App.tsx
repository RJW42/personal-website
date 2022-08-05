import React from 'react';
import { Routes , Route } from 'react-router-dom';

import {Header} from "./components";
import { useThemeChoise } from './hooks';
import {AboutPage, ContactMePage, CVPage, ProjectsPage} from "./pages";


const App = () => {
  const className = useThemeChoise(
    'bg-light', 'bg-dark'
  )

  return (
    <div className={"App " + className}>
      Test
      <header>
        <Header
          links={[
            {name: "About", url: ""},
            {name: "Projects", url: "projects"},
            {name: "CV", url: "cv"},
            {name: "Contact Me", url: "contact"}
          ]}
        />
      </header>
      <main>
        <Routes>
          <Route 
            path=''
            element={<AboutPage/>}
          />
          <Route 
            path='projects'
            element={<ProjectsPage/>}
          />
          <Route 
            path='cv'
            element={<CVPage/>}
          />
          <Route 
            path='contact'
            element={<ContactMePage/>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import React from 'react';

import {Header} from "./components";
import { useThemeChoise } from './hooks';
import {AboutPage} from "./pages";


const App = () => {
  const className = useThemeChoise(
    'bg-light', 'bg-dark'
  )

  return (
    <div className={"App " + className}>
      <header>
        <Header/>
      </header>
      <main>
        <AboutPage/>
      </main>
    </div>
  );
}

export default App;

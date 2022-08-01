import React from 'react';

import {Header} from "./components";
import { ThemeProvider } from './hooks';
import {AboutPage} from "./pages";




const App = () => {
  

  return (
    <ThemeProvider>
      <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <AboutPage/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

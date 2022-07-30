import React from 'react';

import {Header} from "./components";
import {AboutPage} from "./pages";


const App = () => {
  return (
    <div className="App">
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

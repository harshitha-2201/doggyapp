// App.js
import React, { useState } from 'react';
import './index.css'
import Home from './components/Home.jsx';
import Fetching from "./components/Fetching.jsx";
import Display from './components/Display.jsx';

function App() {
  const [displayData, setDisplayData] = useState(null);

  return (
    <div className='App' >
      <Home />
      <Fetching setDisplayData={setDisplayData} />
      <Display displayData={displayData} />
    </div>
  );
}

export default App;


import React, { useState } from 'react';
import Button from './components/UI/Button/Button'

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      
      {/* {showParagraph && <p>this is new@!@@@</p>} */}

      <DemoOutput show={showParagraph} />

      <Button onClick={toggleParagraph} >Show PAragraph</Button>
      

    </div>
  );
}

export default App;

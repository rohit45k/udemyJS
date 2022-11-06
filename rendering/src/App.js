import React, { useState, useCallback } from 'react';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import './App.css';

function App() {

  const [paraIsShown, setParaIsShown] = useState(false);

  console.log("Main App");

  const toggleButtonHandler = useCallback(() => {
    setParaIsShown((prevBtnState) => !prevBtnState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={true}/>
      <DemoOutput show={paraIsShown}/>
      <Button type="button" onClick={toggleButtonHandler}>Click me</Button>
    </div>
  );
}

export default App;

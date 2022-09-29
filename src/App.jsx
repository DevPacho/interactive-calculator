import './App.css';
import DiseñazooLogo from './images/DiseñazooPau.png'
import Button from './components/button';
import Screen from './components/screen';
import ClearButton from './components/clear-button';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState("")

  const addInput = value => {
    setInput(input + value)
  }

  const displayResult = () => {
    input ? setInput(evaluate(input)) : alert("Please enter values for calculations!")
  }

  return (
    <div className="App">
      <div className="Diseñazoo-logo-container">
        <img
          src={DiseñazooLogo}
          className="Diseñazoo-logo"
          alt="Diseñazoo logo" />
      </div>

      <div className="calculator-container">
        <Screen input={input}/>

        <div className="row">
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className="row">
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>*</Button>
          </div>
        <div className="row">
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className="row">
          <Button clickHandler={displayResult}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className="row">
          <ClearButton clearHandler={() => setInput("")}/>
        </div>
      </div>

    </div>
  );
}

export default App;

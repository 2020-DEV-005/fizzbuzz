import React from 'react';
import {FizzBuzzConst} from '../../constants/FizzBuzz.const';
import './App.css';
import FizzBuzz from '../FizzBuzz/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>{FizzBuzzConst.APP_TITLE}</h2>
      </header>
      <FizzBuzz />
    </div>
  );
}

export default App;

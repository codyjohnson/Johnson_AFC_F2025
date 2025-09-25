import { useState } from 'react'
import './App.css'
import {randomNumberGenerator} from "./helper.js";
import Dice from "./components/Dice.jsx";

function App() {

  const [randomNumber, setRandomNumber] = useState(randomNumberGenerator());

  return (
    <>
        <div>
            <Dice randomNumber={randomNumber} />
        </div>
        <div>
            <button onClick={() => setRandomNumber(randomNumberGenerator())}>Roll Dice</button>
        </div>
    </>
  );
}

export default App;
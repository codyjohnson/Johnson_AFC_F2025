import { useState } from 'react'
import {useEffect} from "react";
import './App.css'

function App() {

  const [days, setDays] = useState(100);

  useEffect(() => {
      setDays(days + 1);
  },[]);
  console.log(days);

    function handleClick() {
        setDays(days - 1);
    }

    return (
    <>
      <h1>My Birthday Countdown</h1>

        <button onClick={handleClick}>Click Me</button>

        {days}
    </>
  );
}

export default App;
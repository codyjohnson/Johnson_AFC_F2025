import { useState } from 'react'
import './App.css'

function App() {

    const [revealPassword,    setRevealPassword] = useState(true);

    const handleClick = () => {
        setRevealPassword(!revealPassword);
    }

  return (
    <>
      <h1>App in Password Reveal</h1>
        <input type={revealPassword ? "password":"text"} placeholder="Enter Your Password" name="password"/>
        <button onClick={handleClick}>Show/Hide</button>
    </>
  );
}

export default App;

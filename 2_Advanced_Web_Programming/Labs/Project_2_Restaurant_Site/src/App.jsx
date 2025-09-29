import { useState } from 'react'
import AppNavbar from "./components/AppNavbar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AppNavbar/>

<h1>Hello World</h1>

    </>
  );
}

export default App
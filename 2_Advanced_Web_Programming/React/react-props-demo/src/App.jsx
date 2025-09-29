import './App.css'
import Parent from "./components/Parent.jsx";

function App() {

    const num = 7;

  return (
    <>
      <h1>I am the app component.</h1>
        <Parent mother={"Debra"} father={"Mark"}/>
    </>
  );
}

export default App;
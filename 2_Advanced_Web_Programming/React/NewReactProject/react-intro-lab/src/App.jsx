import { useState } from 'react'
import Greeting from "./components/Greeting.jsx";
import UserCard from "./components/UserCard.jsx";
import CardContainer from "./components/CardContainer.jsx";

let array = [{name: "Charlie", age: 35}, {name: "Alice", age: 30}, {name:"Bob", age: 25}];

function arraySorter(array) {
    return array.sort((a, b) => a.age - b.age);
}

array = arraySorter(array);

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <div>
            <Greeting name="Cody"/>
        </div>
        <div>
            <CardContainer>
                {
                    array.map((item, index) => (
                        <UserCard key={index} name={item.name} age={item.age} />
                    ))
                }
            </CardContainer>
        </div>
      </>
  );
}

export default App

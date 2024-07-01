import { useState } from "react"
import Counter from "./components/Counter";
import Number from "./components/Number";
import Title from "./components/Title";

const App = () => {
  const [counter, setCounter] = useState(0); // [state, updateState]
  const [number, setNumber] = useState(1); // [state, updateState]

  const updateCounter = () => {
    if (!isNaN(number)) {
      setCounter((_counter) => _counter + number);
    }
  }

  const updateNumber = (event) => {
    setNumber(parseInt(event.target.value));
  }
  
  return (
    <>
      <div>
        <Title counter={counter} />
        <Number number={number} updateNumber={updateNumber} />
        <Counter updateCounter={updateCounter} />
      </div>
    </>
  )
}

export default App

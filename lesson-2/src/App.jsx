import { useState } from "react"

const App = () => {
  const [colors, setColors] = useState(["red", "blue", "green"]);
  const [text, setText] = useState("");

  const handleInput = (event) => {
    setText(event.target.value)
  }

  const handleAdd = () => {
    if(text == ""){
      return;
    }
    
    setColors((colors) => {
        return [...colors, text]
    });
    setText("")
  }

  return (
    <>
      <div>
        <input type="text" value={text} onInput={handleInput}/>
        <button onClick={handleAdd}>add</button>
      </div>
      <ul>
        {
          colors.map((color, index) => {
            return (
              <li key={index}>{color}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App

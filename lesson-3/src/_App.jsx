import { useEffect, useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // al primo rendering del componente (mount)
    console.log("COMPONENTE MONTATO");
  }, []);

  useEffect(() => {
    // ad ogni aggiornamento delle dipendenze
    console.log("AGGIORNATO IL VALORE DI COUNTER IN: ", counter);
  }, [counter]);

  useEffect(() => {
    // ad ogni aggiornamento delle dipendenze
    console.log("AGGIORNATO IL VALORE DI OPEN IN: ", open);
  }, [open]);

  useEffect(() => {
    // ad ogni aggiornamento del componente a prescindere da cosa viene aggiornato
    console.log("COMPONENTE AGGIORNATO")
  });

  return (
    <>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter((c) => c + 1)}>Add</button>
      </div>
      <div>
        <button onClick={() => setOpen((o) => !o)}>Toggle</button>
        {
          open && (
            <p>
              Opeded
            </p>
          )
        }
      </div>
    </>
  )
}

export default App

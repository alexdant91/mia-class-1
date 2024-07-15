import { useRef, useState } from "react"

const App = () => {
  const [form, setForm] = useState({
    text: "",
    email: ""
  })

  const inputRef = useRef();
  const emailRef = useRef();

  const handleFocus = (ref) => {
    ref.current.focus();
  }

  const handleInput = ({ target: { name, value } }) => {
    setForm((f) => ({ ...f, [name]: value }));
  }

  const handleSubmit = () => {
    if (form.text.length < 3) {
      handleFocus(inputRef);
      return;
    }
    if (form.email == "") {
      handleFocus(emailRef);
      return;
    }
  }

  return (
    <>
      <input type="text" ref={inputRef} name="text" onInput={handleInput} value={form.text}  placeholder="Text" />
      <input type="email" ref={emailRef} name="email" onInput={handleInput} value={form.email}  placeholder="Email" />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <div>
        <pre>
          {
            JSON.stringify(form, null, 2)
          }
        </pre>
      </div>
    </>
  )
}

export default App

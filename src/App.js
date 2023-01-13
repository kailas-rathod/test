import React, { useState } from "react";
import "./styles.css";

const Err_MSG = " Age must be greater than 18";

export default function App() {
  const [text, setText] = useState("");
  const [isError, setError] = useState(false);
  const handleTextinput = (e) => {
    setError(false)
    console.log(e.target.value);
    setText(e.target.value);
    if (e.target.value < 18) {
      setError(true);
    }
  };
  return (
    <div className="App">
      <input value={text} onChange={handleTextinput} />
      {isError ? Err_MSG : null}
    </div>
  );
}

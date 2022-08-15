import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    if (input.length > 54) {
      setError(true);
    } else {
      setError(false);
    }
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  function style(error) {
    if (error) {
      return {
        border: "2px solid #ff0000",
      };
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write here"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
        style={style(error)}
      />
      {error && (
        <p className="error-message" role="alert">
          Task content can contain max 54 characters
        </p>
      )}
      <button disabled={error} className="todo-button">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

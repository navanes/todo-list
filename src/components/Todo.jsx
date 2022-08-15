import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { MdOutlineClose } from "react-icons/md";

function Todo({ todos, completeTodo, removeTodo }) {
  if (todos.length === 0) {
    return (
      <div className="start-text">
        <h2>Your life is a blank page. You write on it.</h2>
        <h1>So start by adding your tasks here.</h1>
      </div>
    );
  } else {
    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <li key={todo.id}>
          <input
            type="checkbox"
            onChange={() => completeTodo(todo.id)}
            checked={todo.isComplete}
            value={todo.text}
          />
          {todo.text}
        </li>
        <div className="icons">
          <MdOutlineClose
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
        </div>
      </div>
    ));
  }
}

export default Todo;

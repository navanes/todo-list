import React, { useState, useEffect, useRef } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const prevTodosRef = useRef([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const prevTasks = JSON.parse(localStorage.getItem("localTasks"));
      setTodos(prevTasks);
    }
  }, []);

  useEffect(() => {
    prevTodosRef.current = todos;
  }, [todos]);

  const prevTasks = JSON.parse(localStorage.getItem("localTasks"));

  const addTodo = (todo) => {
    let completedText;
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    let newTodos = [todo, ...todos];
    let yourArray = [];
    for (let i = 0; i < prevTasks.length; i++) {
      let completedOnes = prevTasks[i].isComplete;
      if (completedOnes === true) {
        completedText = prevTasks[i];
        yourArray.push(completedText);
      }
    }

    if (checked && yourArray) {
      newTodos = [...newTodos, ...yourArray];
      console.log(newTodos);
      setChecked((c) => !c);
      setTodos(newTodos);
    } else {
      setTodos(newTodos);
    }

    localStorage.setItem("localTasks", JSON.stringify(newTodos));
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
    localStorage.setItem("localTasks", JSON.stringify(removeArr));
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("localTasks", JSON.stringify(updatedTodos));
  };

  const handleFilter = (e) => {
    if (e.target.checked) {
      let filtered = todos.filter((task) => {
        return !task.isComplete;
      });
      setTodos(filtered);
    } else {
      const prevTasks = JSON.parse(localStorage.getItem("localTasks"));
      setTodos(prevTasks);
    }
    setChecked((check) => !check);
  };
  return (
    <div>
      <h3>Task</h3>
      <div>
        {todos !== 0 || localStorage.getItem("localTasks").length !== 2 ? (
          <label>
            <input
              type="checkbox"
              onChange={handleFilter}
              value={todos || []}
              ref={prevTodosRef}
              checked={checked}
            />
            Hide Completed
          </label>
        ) : (
          ""
        )}
      </div>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList;

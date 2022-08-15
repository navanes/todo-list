// import React from "react";
// import data from "../data.json";
// import { useState } from "react";
// import Todo from "./Todo";

// function Tasks() {
//   const [tasks, setTasks] = useState(data);
//   const [userInput, setUserInput] = useState("");

//   const handleToggle = (id) => {
//     console.log("wewe");
//     let inTasks = tasks.map((task) => {
//       return task.id == id
//         ? { ...task, complete: !task.camplete }
//         : { ...task };
//     });
//     setTasks(inTasks);
//   };

//   const handleDelete = () => {
//     let filtered = tasks.filter((task) => {
//       return !task.complete;
//     });
//     setTasks(filtered);
//   };

//   const handleChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addTask(userInput);
//     setUserInput("");
//   };

//   const addTask = (userInput) => {
//     let copy = [...tasks];
//     copy = [
//       ...copy,
//       { id: tasks.length + 1, task: userInput, complete: false },
//     ];
//     setTasks(copy);
//   };

//   return (

//     // <div>
//     //   <label>
//     //     <input type="checkbox" onChange={handleDelete} value="Hide Completed" />
//     //     Hide Completed
//     //   </label>
//     //   <input
//     //     type="text"
//     //     value={userInput}
//     //     onChange={handleChange}
//     //     placeholder="Write here"
//     //   />
//     //   <button onClick={handleSubmit} type="submit">
//     //     Add
//     //   </button>
//     //   {tasks.map((todo) => {
//     //     return (
//     //       <li key={todo.id}>
//     //         <input
//     //           type="checkbox"
//     //           checked={todo.complete ? "checked" : ""}
//     //           onChange={handleToggle}
//     //         />
//     //         {todo.task}
//     //       </li>
//     //     );
//     //   })}
//     // </div>
//   );
// }

// export default Tasks;

import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

//create your first component
const Home = () => {
  const [input, setInput] = useState(" ");

  const [task, setTask] = useState([]);

  function AddTask() {
    if (input === " ") {
      alert("Add task");
    } else {
      setTask([input, ...task]);
    }
    setInput(" ");
  }

  function DeleteTask(index) {
    setTask(task.filter((activity, i) => i !== index));
  }

  return (
    <div className="container">
      <h1>To Do List </h1>
      <div className="addBarPlusButton">
        <input
          placeholder=" What you think you have to do? "
          type="texto"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={AddTask}> Add task </button>
      </div>
      <ul>
        {" "}
        {task.map((activity, index) => (
          <li key={index}>
            {" "}
            {activity}
            <AiOutlineDelete onClick={() => DeleteTask(index)} />
          </li>
        ))}
        
      </ul>
      <div className="taskcounter"> {task.length} </div>
    </div>
  );
};

export default Home;

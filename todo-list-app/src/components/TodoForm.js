import React, { useState } from "react";

function TodoForm({ addTask }) {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !time) {
      alert("Please enter task and time");
      return;
    }

    const newTask = {
      id: Date.now(),
      text,
      time,
      done: false,
    };

    addTask(newTask);

    setText("");
    setTime("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input"
      />

      <input
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="input"
      />

      <button className="add-btn">Add</button>
    </form>
  );
}

export default TodoForm;

import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Toggle done
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Sort tasks
  const sortedTasks = [...tasks].sort((a, b) => {
    // undone first
    if (a.done !== b.done) return a.done - b.done;

    // recent time first
    return new Date(b.time) - new Date(a.time);
  });

  return (
    <div className="container">
      <h1 className="title">✨ My To-Do List</h1>

      <TodoForm addTask={addTask} />

      <TodoList
        tasks={sortedTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;

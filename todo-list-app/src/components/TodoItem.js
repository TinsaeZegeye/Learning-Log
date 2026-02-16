import React from "react";

function TodoItem({ task, toggleTask, deleteTask }) {
  return (
    <div className={`todo-item ${task.done ? "done" : ""}`}>
      <div className="left">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
        />

        <div>
          <div className="task-text">{task.text}</div>

          <div className="task-time">
            {new Date(task.time).toLocaleString()}
          </div>
        </div>
      </div>

      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;

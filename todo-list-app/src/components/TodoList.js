import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks yet. Add one above 👆</p>;
  }

  return (
    <div className="list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TodoList;

import React from "react";

function HabitItem({ habit, toggleHabit, deleteHabit }) {
  return (
    <div className="habit-item">
      <span
        onClick={() => toggleHabit(habit.id)}
        style={{
          textDecoration: habit.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {habit.name}
      </span>

      <button onClick={() => deleteHabit(habit.id)}>Delete</button>
    </div>
  );
}

export default HabitItem;

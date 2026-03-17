import React, { useState } from "react";

function HabitItem({ habit, toggleHabit, deleteHabit, editHabit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(habit.name);

  const today = new Date().toISOString().split("T")[0];
  const completedToday = habit.history[today];

  // 🔥 Calculate streak
  const getStreak = () => {
    let streak = 0;
    let date = new Date();

    while (true) {
      const d = date.toISOString().split("T")[0];
      if (habit.history[d]) {
        streak++;
        date.setDate(date.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  };

  const handleEdit = () => {
    editHabit(habit.id, newName);
    setIsEditing(false);
  };

  return (
    <div className="habit-item">
      {isEditing ? (
        <>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleHabit(habit.id)}
            style={{
              textDecoration: completedToday ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {habit.name}
          </span>

          <span> 🔥 {getStreak()}</span>

          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteHabit(habit.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default HabitItem;

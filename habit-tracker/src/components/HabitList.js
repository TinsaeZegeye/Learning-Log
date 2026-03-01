import React from "react";
import HabitItem from "./HabitItem";

function HabitList({ habits, toggleHabit, deleteHabit }) {
  return (
    <div>
      {habits.length === 0 && <p>No habits yet</p>}

      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
        />
      ))}
    </div>
  );
}

export default HabitList;

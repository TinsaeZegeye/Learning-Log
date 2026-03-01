import React, { useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  // Add habit
  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name: name,
      completed: false,
    };
    setHabits([...habits, newHabit]);
  };

  // Toggle habit
  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit,
      ),
    );
  };

  // Delete habit
  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="container">
      <h1>Habit Tracker</h1>

      <HabitForm addHabit={addHabit} />

      <HabitList
        habits={habits}
        toggleHabit={toggleHabit}
        deleteHabit={deleteHabit}
      />
    </div>
  );
}

export default App;

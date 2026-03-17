import React, { useState, useEffect } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import Stats from "./components/Stats";

function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // Add habit
  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      history: {},
    };
    setHabits([...habits, newHabit]);
  };

  // Toggle today
  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id !== id) return habit;

        const updatedHistory = {
          ...habit.history,
          [today]: !habit.history[today],
        };

        return { ...habit, history: updatedHistory };
      }),
    );
  };

  // Delete
  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  // Edit
  const editHabit = (id, newName) => {
    setHabits(habits.map((h) => (h.id === id ? { ...h, name: newName } : h)));
  };

  return (
    <div className="container">
      <h1>Habit Tracker</h1>

      <Stats habits={habits} />

      <HabitForm addHabit={addHabit} />

      <HabitList
        habits={habits}
        toggleHabit={toggleHabit}
        deleteHabit={deleteHabit}
        editHabit={editHabit}
      />
    </div>
  );
}

export default App;

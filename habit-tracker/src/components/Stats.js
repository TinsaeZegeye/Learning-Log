import React from "react";

function Stats({ habits }) {
  const today = new Date().toISOString().split("T")[0];

  const total = habits.length;
  const completed = habits.filter((h) => h.history[today]).length;

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="stats">
      <h3>Today's Progress</h3>
      <p>
        {completed} / {total} completed ({percent}%)
      </p>
    </div>
  );
}

export default Stats;

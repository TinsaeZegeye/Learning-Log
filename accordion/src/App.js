import React from "react";
import Accordion from "./components/Accordion";

export default function App() {
  const items = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces using components and hooks.",
    },
    {
      id: 2,
      title: "What are Hooks?",
      content:
        "Hooks are functions that let you use state and other React features in functional components.",
    },
    {
      id: 3,
      title: "What is useState?",
      content:
        "useState is a hook that lets you add state to functional components.",
    },
    {
      id: 4,
      title: "What is useEffect?",
      content:
        "useEffect lets you perform side effects such as fetching data or updating the DOM.",
    },
  ];

  return (
    <div className="app">
      <h1>React Accordion App</h1>
      <Accordion items={items} />
    </div>
  );
}

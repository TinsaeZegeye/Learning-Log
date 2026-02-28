import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ items }) {
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="accordion">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={item.id === activeId}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
}

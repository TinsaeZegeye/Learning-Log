import {useState} from "react";
import { MdOutlineEditCalendar } from "react-icons/md";

export default function Form({ onItemAdd }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, id: Date.now(), packed: false };
    console.log(newItem);

    onItemAdd(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleFormSubmit}>
      <h3>
        What do you want <MdOutlineEditCalendar /> for your trip?
      </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}

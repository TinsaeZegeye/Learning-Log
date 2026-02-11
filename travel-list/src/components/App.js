import "../index.css";
import { useState } from "react";
import Stats from "./Stats";
import PackageList from "./PackageList";
import Form from "./Form";
import Logo from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);

  function handleItemAdd(item) {
    setItems((items) => [...items, item]);
  }

  function handleItemDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearItem() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all the items?",
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onItemAdd={handleItemAdd} />
      <PackageList
        items={items}
        onItemDelete={handleItemDelete}
        onItemToggle={handleToggleItem}
        onClearItem={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}

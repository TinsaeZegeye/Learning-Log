import { useState } from "react";
import "../index.css";
import Header from "./Header";
import FriendsPanel from "./FriendsPanel";
import SplitBill from "./SplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleSelection(friend) {
    setSelected((selected) => (selected?.id === friend?.id ? null : friend));
    setIsOpen(false);
  }

  return (
    <div className="app">
      <Header />
      <FriendsPanel
        selected={selected}
        onSelect={handleSelection}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setSelected={setSelected}
        friends={friends}
        setFriends={setFriends}
      />
      {selected && (
        <SplitBill
          selected={selected}
          setSelected={setSelected}
          setFriends={setFriends}
          key={selected.id}
        />
      )}
    </div>
  );
}

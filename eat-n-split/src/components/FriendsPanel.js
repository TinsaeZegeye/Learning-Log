import FriendList from "./FriendsList";
import AddFriendForm from "./AddFriendForm";

export default function FriendsPanel({
  selected,
  onSelect,
  isOpen,
  setIsOpen,
  setSelected,
  friends,
  setFriends,
}) {
  function handleFormSubmit(friend) {
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  }

  function handleButtonClick() {
    setIsOpen((isOpen) => !isOpen);
    setSelected(null);
  }

  return (
    <div className="friends-panel">
      <h2>Friend List</h2>
      <FriendList friends={friends} selected={selected} onSelect={onSelect} />
      {isOpen && <AddFriendForm onFormSubmit={handleFormSubmit} />}
      <button onClick={handleButtonClick} className="btn btn--right">
        {isOpen ? "Close" : "Add Friend"}
      </button>
    </div>
  );
}

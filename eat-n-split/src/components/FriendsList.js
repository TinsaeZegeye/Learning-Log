import Friend from "./Friend";

export default function FriendList({ friends, selected, onSelect }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selected={selected}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}

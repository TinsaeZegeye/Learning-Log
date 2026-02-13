export default function Friend({ friend, selected, onSelect }) {
  const balanceText =
    friend.balance > 0
      ? `${friend.name} owes you $${friend.balance}`
      : friend.balance < 0
        ? `You owe ${friend.name} $${Math.abs(friend.balance)}`
        : `You and ${friend.name} are even`;

  return (
    <li
      className={`friend-item ${selected?.id === friend.id ? "selected" : ""}`}
    >
      <img src={friend.image} alt={friend.name} />
      <div>
        <h3>{friend.name}</h3>
        <p
          style={
            friend.balance > 0
              ? { color: "green" }
              : friend.balance < 0
                ? { color: "red" }
                : {}
          }
        >
          {balanceText}
        </p>
      </div>
      <button className="btn" onClick={() => onSelect(friend)}>
        {selected?.id === friend?.id ? "Close" : "Select"}
      </button>
    </li>
  );
}

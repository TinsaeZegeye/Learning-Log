import { useState } from "react";

export default function SplitBill({ selected, setSelected, setFriends }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoPays, setWhoPays] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  function calculateNewBalance(friend) {
    if (friend.id !== selected.id) return friend;

    const delta = whoPays === "user" ? paidByFriend : -paidByUser;

    return { ...friend, balance: friend.balance + delta };
  }

  function handleBillSplit(e) {
    e.preventDefault();
    if (!bill) return;

    setFriends((friends) =>
      friends.map((friend) => calculateNewBalance(friend)),
    );

    setSelected(null);
  }

  return (
    <div className="split-bill">
      <form className="form" onSubmit={handleBillSplit}>
        <h3>Split Bill with {selected.name}</h3>

        <div className="form-row">
          <label>Total Bill:</label>
          <input
            type="text"
            placeholder="$200"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>

        <div className="form-row">
          <label>Your Expense:</label>
          <input
            type="text"
            placeholder="$100"
            value={paidByUser}
            onChange={(e) =>
              setPaidByUser(
                Number(e.target.value) > bill
                  ? paidByUser
                  : Number(e.target.value),
              )
            }
          />
        </div>

        <div className="form-row">
          <label>{selected.name}'s Expense:</label>
          <input type="text" placeholder="$100" disabled value={paidByFriend} />
        </div>

        <div className="form-row">
          <label>Who pays?</label>
          <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selected.name}</option>
          </select>
        </div>

        <button className="btn btn--right">Split Bill</button>
      </form>
    </div>
  );
}

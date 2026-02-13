import { useState } from "react";

export default function AddFriendForm({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function createFriendObject(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: image + `?u=${id}`,
      id,
      balance: 0,
    };

    onFormSubmit(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form" onSubmit={createFriendObject}>
      <h3>Add Friend</h3>

      <div className="form-row">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Eg. Jonas"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label>Image URL:</label>
        <input
          type="text"
          placeholder="Photo URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <button className="btn">Add</button>
    </form>
  );
}

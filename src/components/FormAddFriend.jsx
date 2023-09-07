import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend, setShowAddFriend }) {
  const [newFriend, setNewFriend] = useState({
    name: "",
    image: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewFriend({ ...newFriend, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFriend.name && newFriend.image) onAddFriend(newFriend);

    setNewFriend({ name: "", image: "" });
    setShowAddFriend(false);
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        name="name"
        type="text"
        value={newFriend.name}
        onChange={(e) => handleChange(e)}
      />
      <label>Image URL</label>
      <input
        name="image"
        type="text"
        value={newFriend.image}
        onChange={(e) => handleChange(e)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;

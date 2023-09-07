import { useState } from "react";

const initialFriends = [
  {
    id: 1,
    name: "Naveen",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 2,
    name: "Paul",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 3,
    name: "Nishila",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showSplit, setShowSplit] = useState(false);
  const [splitWith, setSplitWith] = useState([]);
  // console.log(splitWith);
  const handleSetShowSplit = (id) => {
    setShowSplit(!showSplit);
    const arr = friends.filter((friend) => friend.id === id);
    setSplitWith(arr);
  };
  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };
  const handleAddFriend = (newFriend) => {
    newFriend.id = friends.length + 1;
    newFriend.balance = 0;
    setFriends([...friends, newFriend]);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          setShowSplit={setShowSplit}
          friends={friends}
          onSetShowSplit={handleSetShowSplit}
        />
        {showAddFriend && (
          <FormAddFriend
            onAddFriend={handleAddFriend}
            setShowAddFriend={setShowAddFriend}
          />
        )}
        <Button onClick={handleShowAddFriend}>{`${
          showAddFriend ? "Close" : "Add Friend"
        }`}</Button>
      </div>
      {showSplit && <FormSplitBill splitWith={splitWith} />}
    </div>
  );
};

function FormSplitBill({ splitWith }) {
  const [{ name }] = splitWith;
  const [billState, setBillState] = useState({
    total: "",
    expense: "",
    payer: "You",
    friend: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBillState({ ...billState, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const friend = billState.total - billState.expense;
    setBillState({ ...billState, friend });
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {name}</h2>

      <label>Total Amount</label>
      <input
        type="text"
        name="total"
        value={billState.total}
        onChange={(e) => handleChange(e)}
      />
      <label>Your expense</label>
      <input
        type="text"
        name="expense"
        value={billState.expense}
        onChange={(e) => handleChange(e)}
      />
      <label>{name}'s expense</label>
      <input type="text" value={billState.friend} name="friend" disabled />
      <label>Who is Paying?</label>
      <select
        name="payer"
        value={billState.payer}
        onChange={(e) => handleChange(e)}
      >
        <option value="you">You</option>
        <option value="friend">{name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function FriendsList({ friends, onSetShowSplit, setShowSplit }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            friend={friend}
            key={friend.id}
            onSetShowSplit={onSetShowSplit}
            setShowSplit={setShowSplit}
          />
        );
      })}
    </ul>
  );
}

function Friend({ friend, onSetShowSplit, setShowSplit }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance * -1} Rs
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          You owe {friend.name} {friend.balance} Rs
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSetShowSplit(friend.id)}>Select</Button>
    </li>
  );
}

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

export default App;

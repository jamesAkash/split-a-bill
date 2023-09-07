import { useState } from "react";
import initialFriends from "./data";
import FriendsList from "./components/FriendList";
import FormSplitBill from "./components/FormSplitBill";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showSplit, setShowSplit] = useState(false);
  const [splitWith, setSplitWith] = useState([]);
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
      <div className="holder">
        {showSplit && <FormSplitBill splitWith={splitWith} />}
      </div>
    </div>
  );
};
export default App;

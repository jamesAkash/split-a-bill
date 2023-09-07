import React from "react";
import Friend from "./Friend";

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

export default FriendsList;

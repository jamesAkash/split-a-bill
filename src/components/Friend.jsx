import React from "react";
import Button from "./Button";

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

export default Friend;

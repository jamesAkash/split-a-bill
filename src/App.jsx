import React from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  return (
    <div className="app">
      <div className="app-left">
        <People />
        <AddPeople />
      </div>
      <SplitForm />
    </div>
  );
};

const People = () => {
  return (
    <div className="people-container">
      <ul>
        {initialFriends.map((item) => {
          return <ListItems />;
        })}
      </ul>
    </div>
  );
};

const AddPeople = () => {
  return (
    <div className="addForm-container">
      <form className="addForm">
        <FormField placeholder="friend" name="🥰Friend name" type="text" />
        <FormField placeholder="friend" name="📷 Image URL" type="text" />
        <button className="btn btn-add">Add</button>
      </form>
      <button className="btn btn-close">Close</button>
    </div>
  );
};

const SplitForm = () => {
  return <div>Form</div>;
};

const FormField = ({ name, type, friend }) => {
  return (
    <div className="form-control">
      <label htmlFor={friend || name}>{name}</label>
      <input type={type} />
    </div>
  );
};

const ListItems = () => {
  return (
    <li>
      <img
        src="https://i.pravatar.cc/48?u=118836"
        className="people-avatar"
        alt="avatar"
      />
      <div className="details">
        <h3>Clark</h3>
        <h4>You owe Clark 10Rs</h4>
      </div>
      <button className="btn">Select</button>
    </li>
  );
};

export default App;

import React, { useState } from "react";
import Button from "./Button";

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
      <input
        style={{ color: "orangered", fontSize: "16px", fontWeight: "700" }}
        type="text"
        value={billState.friend}
        name="friend"
        disabled
      />
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

export default FormSplitBill;

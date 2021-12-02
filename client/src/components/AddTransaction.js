import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = ({ transaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  // Input Field handler's
  const handleUserInput = (e) => {
    setText(e.target.value);
  };

  const handleUserNumericInput = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlfor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={handleUserInput}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlfor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleUserNumericInput}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

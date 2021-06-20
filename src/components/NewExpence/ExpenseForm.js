import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = props => {
  const [entertitle, setentertitle] = useState("");
  const [enteramount, setenteramount] = useState("");
  const [enterdate, setenterdate] = useState("");
  const titlechangeHanlder = event => {
    setentertitle(event.target.value);
  };
  const amountchangeHanlder = event => {
    setenteramount(event.target.value);
  };
  const datechangeHanlder = event => {
    setenterdate(event.target.value);
  };
  const submitHanlder = event => {
    event.preventDefault();
    const expenseData = {
      title: entertitle,
      amount: enteramount,
      date: new Date(enterdate),
    };
    // console.log(expenseData);
    props.onFormAdd(expenseData);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titlechangeHanlder} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            max="0.01"
            onChange={amountchangeHanlder}
          />
        </div>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={datechangeHanlder}
        />
      </div>
      <div className="new-expense__actions"></div>
      <button type="submit" onClick={submitHanlder}>
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;

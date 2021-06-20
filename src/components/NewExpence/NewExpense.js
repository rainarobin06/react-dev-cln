import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const onFormAddHandler = expenseformdata => {
    const expenseData = {
      ...expenseformdata,
      id: Math.random(1, 200).toString(),
    };
    props.newFormData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onFormAdd={onFormAddHandler} />
    </div>
  );
};

export default NewExpense;

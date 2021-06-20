import React from "react";
import "./Expensefilter.css";

function ExpenseFilter(props) {
  const dropdown = event => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenes-filter">
      <div className="enpense-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdown}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;

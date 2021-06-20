import "./App.css";
import ExpenseItem from "./components/Expense/ExpenseItem";
import "bootstrap/dist/css/bootstrap.min.css";
import expenses from "./components/Data/inputdata";
import NewExpense from "./components/NewExpence/NewExpense";
import { useEffect, useState } from "react";
import ExpenseFilter from "./components/Expense/Expensefilter";

function App() {
  const [expenseData, setexpenseData] = useState(expenses);

  const [filteredYear, setfilteryear] = useState("2021");

  const handleFilter = selectedYear => {
    setfilteryear(selectedYear);
  };

  console.log("App js - ", filteredYear);

  const filterExpense = expenseData.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  useEffect(() => {
    console.log("Page load", filteredYear);
  }, [filteredYear]);

  const newFormDataHandle = inputformdata => {
    setexpenseData(prevexpense => {
      return [inputformdata, ...expenseData];
    });
  };

  return (
    <div>
      <NewExpense newFormData={newFormDataHandle} />
      <ExpenseFilter selected={filteredYear} onChangeFilter={handleFilter} />
      {filterExpense.map(expenses => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </div>
  );
}

export default App;

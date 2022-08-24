import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");
  const selectFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onSelectFilter={selectFilter} />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items = {filteredItems} />
    </Card>
  );
}

export default Expenses;

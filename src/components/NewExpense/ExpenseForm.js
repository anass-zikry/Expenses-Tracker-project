import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  
  const submitHandler = event => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    props.onAddExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
    props.onCanceled(true);
  }
  const cancelHandler= () => {
    props.onCanceled(true);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="expense-form">
        <div className="expense-form-entry">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className="expense-form-entry">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="expense-form-entry">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expense-form-submit">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

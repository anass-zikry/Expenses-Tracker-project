import React, { useState } from "react";
import NewExpense from "./NewExpense";
import "./AddNewExpense.css";

function AddNewExpense(props) {
  const addNewHandler = () => {
    setNewExpenseContent(
      <NewExpense onCancel={canceledHandler} onAddExpense={props.onAddExpense} />
    );
  };
  const canceledHandler = (canceled) => {
    if (canceled)
      setNewExpenseContent(
        <div className="add-new-expense__button">
        <button onClick={addNewHandler} className="add-new__button">
          Add New Expense
        </button>
      </div>);
  };

  const [newExpenseContent, setNewExpenseContent] = useState(<div className="add-new-expense__button">
    <button onClick={addNewHandler} className="add-new__button">
      Add New Expense
    </button></div>
  );

  return <div className="add-new-expense">{newExpenseContent}</div>;
}

export default AddNewExpense;

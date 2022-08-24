
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  const expenseDataHandler = expenseData => {
    const expense = {
      ...expenseData,
      id : Math.random().toString()
    };
    props.onAddExpense(expense);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onCanceled={props.onCancel} onAddExpenseData={expenseDataHandler} />
    </div>
  );
}

export default NewExpense;
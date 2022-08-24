import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

function ExpensesList(props) {
    let expensesContent = <h3 className='expenses-list__none'>Hoooray!! No expenses.</h3>;

    if(props.items.length === 0) return(expensesContent);
    return (
        <ul className='expenses-list'>
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          edate={expense.date}
        />
      ))}
    </ul>);

}

export default ExpensesList;
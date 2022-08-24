
import "./ExpenseFilter.css";

function ExpenseFilter(props) {

    const onSelectHandler = event => {
        props.onSelectFilter(event.target.value);
    }
  return (
    <div className="expense-filter">
      <label>Filter by year</label>
      <select value={props.selected} onChange={onSelectHandler}>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;

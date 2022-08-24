import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.mydate.toLocaleString("en-US", { month: "long" });
  const day = props.mydate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.mydate.getFullYear();
  return (
    <div className="date">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </div>
  );
}

export default ExpenseDate;

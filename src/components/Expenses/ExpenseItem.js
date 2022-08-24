import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="item">
        <ExpenseDate mydate={props.edate} />
        <div className="item-description">
          <h3>{props.title}</h3>
          <div className="item-price">
            <p>${props.amount}</p>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

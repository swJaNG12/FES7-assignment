import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFillteredYear] = useState("2020");

  const filterChangeHander = (selectedYear) => {
    console.log(selectedYear);
    setFillteredYear(selectedYear);

  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHander}
        />
        <ExpenseItem
          date={props.expenses[0].date}
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
        />
        <ExpenseItem
          date={props.expenses[1].date}
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
        />
        <ExpenseItem
          date={props.expenses[2].date}
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
        />
        <ExpenseItem
          date={props.expenses[3].date}
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;

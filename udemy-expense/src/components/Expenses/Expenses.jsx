import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFillteredYear] = useState("2020");

  const filterChangeHander = (selectedYear) => {
    console.log(selectedYear);
    setFillteredYear(selectedYear);
  };
  console.log(props.expenses[0].date.getFullYear());
  console.log(filteredYear);

  const filteredExpenses = props.expenses.filter((el) => {
    return el.date.getFullYear() === parseInt(filteredYear);
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHander}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

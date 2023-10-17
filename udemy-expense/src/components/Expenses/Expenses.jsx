import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
  console.log(filteredExpenses)


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHander}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

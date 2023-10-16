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
  console.log(props.expenses[0].date.getFullYear());
  console.log(filteredYear);

  const filteredExpenses = props.expenses.filter((el) => {
    return el.date.getFullYear() === parseInt(filteredYear);
  });

  let expensesContent = <p>No expenses found</p>;

  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense, idx) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      );
    })
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHander}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;

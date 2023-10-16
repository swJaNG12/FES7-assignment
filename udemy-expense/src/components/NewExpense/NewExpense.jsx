import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEdding(false)
  };

  const [isEdditng, setIsEdding] = useState(false);

  const startEdditingHandler = () => {
    setIsEdding(true);
  };

  const stopEdditingHandler = () => {
    setIsEdding(false);
  };

  return (
    <div className="new-expense">
      {!isEdditng && (
        <button onClick={startEdditingHandler}>Add New Expense</button>
      )}
      {isEdditng && (
        <ExpenseForm
          onCancle={stopEdditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

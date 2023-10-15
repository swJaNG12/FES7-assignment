import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
  // 여러개의 상태로 처리
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  // changeHandler 통합
  // e 객체를 넘겨받지 못한다.
  // <input type="text" onChange={(e) => inputChangeHandler('title', e.target.value)} />
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "date") {
      setDate(value);
    } else {
      setAmount(value);
    }
  };

  // 한 개의 상태로 처리
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  // const titleChangeHandler = (e) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   title: e.target.value,
  //   // });
  //   setUserInput((prevState) => {
  //     return {
  //       ...prevState,
  //       title: e.target.vvalue,
  //     };
  //   });
  // };
  // const amountChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,
  //     amount: e.target.value,
  //   });
  // };
  // const dateChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,
  //     date: e.target.value,
  //   });
  // };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

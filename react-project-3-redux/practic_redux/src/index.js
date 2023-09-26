import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from 'redux';
import rootReducer from "./modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
console.log(store.getState())

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// import { createStore } from 'redux';

// const plus = document.querySelector('#plus');
// const minus = document.querySelector('#minus');
// const number = document.querySelector('#number');
// const quantity = document.querySelector('#quantity');
// const totalPrice = document.querySelector('#total');

// const PRICE = 17500;


// const countReducer = (count = 0, action) => {
//   switch(action.type) {
//     case 'ADD':
//       return count + 1;
//     case 'MINUS':
//       return count - 1;
//     default:
//       return count;
//   }
// }

// const store = createStore(countReducer);

// const updateResult = () => {
//   number.textContent = store.getState();
//   quantity.textContent = store.getState();
//   totalPrice.textContent = store.getState() * PRICE;
// }

// store.subscribe(updateResult);


// const addNumber = () => {
//   store.dispatch({type: 'ADD'})
// }

// const minusNumber = () => {
//   store.dispatch({type: 'MINUS'});
// }

// plus.addEventListener('click', addNumber);
// minus.addEventListener('click', minusNumber);
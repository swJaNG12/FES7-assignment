import plus from "./plus.js";
import './style.css'
// import rabbit from './rabbit.png'

// console.log(pw)

let env;
if(process.env.NODE_ENV === 'development') {
  env = dev;
} else {
  env = pro;
}
console.log(process.env.NODE_ENV)

console.log(env)

// document.addEventListener('DOMContentLoaded', () => {
//   document.body.innerHTML = `<img src="${rabbit}" />`;
// })

console.log(plus(2,3))
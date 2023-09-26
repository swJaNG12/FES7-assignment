import ColaGenerator from './js/colaGenerator.js';
import VendingMachineFunc from './js/vendingMachineFunc.js'


const colaGenerator = new ColaGenerator();
await colaGenerator.setUp();
// console.log(colaGenerator)

const vendingMachineFunc = new VendingMachineFunc();
vendingMachineFunc.setUp();
// const sum = require('./sum');
// import 
import Equation from "../src/design/equation.js";
import State from "../src/design/state.js";
let canvas = document.getElementById("crown");
// @ts-expect-error
let ctx = canvas.getContext('2d');
// @ts-expect-error
let state= new State(canvas,ctx);

let a = new Equation(state)
console.log(a);

// test('adds 1 + 2 to equal 3', () => {

//   expect(a.draw()).toBe(1);
// });
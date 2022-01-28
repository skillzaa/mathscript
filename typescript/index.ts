import Interpreter from "./interpreter/interpreter.js";

let script = "a\\p(2)+\\sqrt(b\\p(2))+\\sqrt(34)";
let int = new Interpreter(script);
console.log("int",int);
import Interpreter from "./interpreter/interpreter.js";
let script = "a\\p(2)+\\sqrt(b\\p(2))+\\sqrt(34)";
let int = new Interpreter(script);
int.processSuperScript();
int.processSqrt();
console.log("raw", int.raw);

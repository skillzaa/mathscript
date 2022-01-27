import Trigger from "./trigger.js";
import Interpreter from "./interpreter.js";
import scriptToRaw from "./filters/scriptToRaw.js";
import processSuperScript from "./filters/processSuperScript.js";
import markCommandClosing from "./filters/markCommandClosing.js";
import markCommandClosingAll from "./filters/markCommandClosingAll.js";
import markCommandClosingBrackets from "./filters/markCommandClosingBrackets.js";


let script = "a\\p(2)+\\sqrt(b\\p(2))+\\sqrt(34)"
let scripttoraw = scriptToRaw(script);
// console.log("scripttoraw",scripttoraw);
let markclosing = markCommandClosingBrackets(scripttoraw);
console.log("markclosing",markclosing);
// // let second = markCommandClosingAll(first);
// let second = markCommandClosingAll(first);
// console.log("markclosing",markclosing);

// let ssprocessed = processSuperScript(first);

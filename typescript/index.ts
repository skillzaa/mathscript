import scriptToRaw from "./filters/scriptToRaw.js";
import processSuperScript from "./filters/processSuperScript.js";
import markCommandClosingBrackets from "./filters/markCommandClosingBrackets.js";
import removeCommand from "./filters/removeCommand.js";


let script = "a\\p(2)+\\sqrt(b\\p(2))+\\sqrt(34)"
let scripttoraw = scriptToRaw(script);
// console.log("scripttoraw",scripttoraw);
let markclosing = markCommandClosingBrackets(scripttoraw);
// console.log("markclosing",markclosing);
let ssProcessed = processSuperScript(markclosing);
// console.log(ssProcessed);

let ssRemoved = removeCommand("\\p(",ssProcessed);
console.log(ssRemoved);

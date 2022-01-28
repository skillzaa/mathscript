import scriptToRaw from "./filters/scriptToRaw.js";
import processSuperScript from "./filters/processSuperScript.js";
import markCommandClosingBrackets from "./filters/markCommandClosingBrackets.js";
import removeCommand from "./filters/removeCommand.js";
let script = "a\\p(2)+\\sqrt(b\\p(2))+\\sqrt(34)";
//*********************************** */
//----Step 1 
//*********************************** */
let scripttoraw = scriptToRaw(script);
// console.log("scripttoraw",scripttoraw);
//*********************************** */
//*********************************** */
//----Step 2 
//*********************************** */
let markclosing = markCommandClosingBrackets(scripttoraw);
// console.log("markclosing",markclosing);
//*********************************** */
//*********************************** */
//----Step 3 
//*********************************** */
let ssProcessed = processSuperScript(markclosing);
// console.log("ssProcessed", ssProcessed);
//*********************************** */
//*********************************** */
//----Step 4 
//*********************************** */
let ssRemoved = removeCommand("\\p(", ssProcessed);
console.log("ssRemoved", ssRemoved);
//*********************************** */

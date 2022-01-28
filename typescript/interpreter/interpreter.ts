import Item from "./item.js";
import scriptToRaw from "./corefilters/scriptToRaw.js";
import markCommandClosingBrackets from "./corefilters/markCommandClosingBrackets.js";

export default class Interpreter {
readonly script:string;
// readonly rawStepOne:Item[];
readonly raw:Item[];

constructor(script:string){
this.script = script;
let rawStepOne = scriptToRaw(this.script);
this.raw =markCommandClosingBrackets(rawStepOne);
}







}
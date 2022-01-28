import scriptToRaw from "./corefilters/scriptToRaw.js";
import markCommandClosingBrackets from "./corefilters/markCommandClosingBrackets.js";
export default class Interpreter {
    constructor(script) {
        this.script = script;
        let rawStepOne = scriptToRaw(this.script);
        this.raw = markCommandClosingBrackets(rawStepOne);
    }
}

import scriptToRaw from "./corefilters/scriptToRaw.js";
import markCommandClosingBrackets from "./corefilters/markCommandClosingBrackets.js";
import processSuperScript from "./corefilters/processSuperScript.js";
import processSqrt from "./corefilters/processSqrt.js";
import removeCommand from "./corefilters/removeCommand.js";
export default class Interpreter {
    constructor(script) {
        this.script = script;
        let rawStepOne = scriptToRaw(this.script);
        this.raw = markCommandClosingBrackets(rawStepOne);
    }
    processSuperScript() {
        this.raw = processSuperScript(this.raw);
        this.raw = removeCommand("\\p(", this.raw);
        // return this.final;
    }
    processSqrt() {
        this.raw = processSqrt(this.raw);
        //-no need to remove
        // this.raw  = removeCommand("\\sqrt(",this.raw);
        // return this.final;
    }
}

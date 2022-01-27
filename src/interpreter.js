export default class Interpreter {
    constructor(code = "") {
        this.code = code;
        // this.decode = this.code_to_decode();    
        this.triggers = [];
        this.normalState = true;
        // this.triggers.push("fr");--great
    }
    run() {
        let state = null;
        for (let c = 0; c < this.code.length; c++) {
            if (this.code[c] == "\\") {
                console.log("find \\", c, this.code[c]);
            }
            console.log(c, this.code[c]);
        }
    }
}

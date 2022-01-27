export var InputType;
(function (InputType) {
    InputType["Command"] = "COMMAND";
    InputType["data"] = "DATA";
})(InputType || (InputType = {}));
export default class CodeItem {
    constructor() {
        this.content = "";
        this.type = InputType.data;
    }
}

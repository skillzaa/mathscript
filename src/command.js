export default class Command {
    constructor() {
        this.lookfor = "";
    }
    callback(code, current_index) {
        console.log("Trigger is :" + this.lookfor, code, current_index);
        return true;
    }
}

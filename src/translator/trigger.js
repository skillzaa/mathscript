export default class Trigger {
    constructor() {
        this.lookfor = "";
    }
    callback(code, current_index) {
        console.log("Trigger call back called");
        return true;
    }
}

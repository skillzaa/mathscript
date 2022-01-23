import Item from "./item.js";
export default class LineBotEnd extends Item {
    constructor(state) {
        super(state);
    }
    draw() {
        //=====add to local state
        this.state.draw_line_bot();
        this.state.set_bot_line_mid();
        // console.log("set_bot_line_mid",this.state);
        return true;
    }
}

import Item from "./item.js";
export default class LineBotEnd extends Item {
    constructor(state) {
        super(state);
    }
    draw() {
        //=====add to local state
        this.state.draw_line_bot();
        return true;
    }
}

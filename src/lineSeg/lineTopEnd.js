import Item from "./item.js";
export default class LineTopEnd extends Item {
    constructor(state) {
        super(state);
    }
    draw() {
        //=====add to local state
        this.state.draw_line_top();
        return true;
    }
}

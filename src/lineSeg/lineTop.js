import Item from "./item.js";
export default class LineTop extends Item {
    constructor(state) {
        super(state);
    }
    draw(x, y) {
        //=====add to local state
        this.state.current_seg.line_top_startX = x;
        this.state.current_seg.line_top_startY = y;
        // console.log(this.state);
        return true;
    }
}

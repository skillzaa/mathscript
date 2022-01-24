import Item from "./item.js";
export default class LineBot extends Item {
    constructor(state) {
        super(state);
    }
    draw(x, y) {
        //=====add to local state
        this.state.current_seg.line_bot_startX = x;
        this.state.current_seg.line_bot_startY = y + this.state.current_seg.height;
        // console.log(this.state);
        return true;
    }
}

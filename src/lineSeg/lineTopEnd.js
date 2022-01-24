import Item from "./item.js";
export default class LineTopEnd extends Item {
    constructor(state) {
        super(state);
    }
    draw() {
        //=====add to local state
        this.state.draw_line(this.state.current_seg.line_top_startX, this.state.current_seg.line_top_startY, this.state.getX(), this.state.current_seg.line_top_startY);
        return true;
    }
}

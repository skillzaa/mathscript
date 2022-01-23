import Item from "./item.js";
export default class LineTop extends Item {
    constructor(state) {
        super(state);
    }
    draw() {
        //=====add to local state
        this.state.current_seg.line_top_startX = this.state.getX();
        this.state.current_seg.line_top_startY = this.state.getY();
        // console.log(this.state);
        return true;
    }
}

import SegItemAbs from "./SegItemAbs.js";
export default class LineTop extends SegItemAbs {
    constructor(state) {
        super(state);
    }
    width() {
        return 0;
    }
    height() {
        return 0;
    }
    draw(state, local_state) {
        //=====add to local state
        local_state.line_top_startX = state.x;
        local_state.line_top_startY = this.state.y;
        return true;
    }
} //sqrt    

import SegItemAbs from "./SegItemAbs.js";
export default class LineBot extends SegItemAbs {
    constructor(state) {
        super(state);
    }
    draw(state, local_state) {
        //=====add to local state
        local_state.line_bot_startX = state.x;
        local_state.line_bot_startY = this.state.y;
        return true;
    }
} //sqrt    

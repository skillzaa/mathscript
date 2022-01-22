export default class LineTop {
    constructor() {
    }
    width() {
        return 0;
    }
    height() {
        return 0;
    }
    draw(state, local_x, local_state) {
        //=====add to local state
        local_state.line_top_startX = local_x;
        local_state.line_top_startY = state.y;
        return 0;
    }
} //sqrt    

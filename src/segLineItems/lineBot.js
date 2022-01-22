export default class LineBot {
    constructor() {
    }
    draw(state, local_x, local_state) {
        //=====add to local state
        local_state.line_bot_startX = local_x;
        local_state.line_bot_startY = state.y;
        return 0;
    }
} //sqrt    

export default class Divider {
    constructor() {
    }
    draw(state, local_x, local_state) {
        //=====add to local state
        local_state.sqrt_startX = local_x + sqrt_width;
        local_state.sqrt_startY = state.y;
        // state.ctx.restore();
        return sqrt_width;
    }
} //sqrt    

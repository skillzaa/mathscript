export default class Divider {
    constructor() {
    }
    draw(state, local_x, local_state) {
        //=====add to local state
        local_state.divider_startX = local_x;
        local_state.divider_startY = state.y;
        return 0;
    }
} //sqrt    

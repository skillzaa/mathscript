export default class DividerEnd {
    constructor() {
    }
    draw(state, local_x, local_state) {
        state.ctx.strokeStyle = "red";
        state.ctx.beginPath();
        state.ctx.moveTo(local_state.divider_startX, local_state.divider_startY);
        state.ctx.lineTo(local_x, state.y);
        state.ctx.stroke();
        return 0;
    }
} //sqrt    

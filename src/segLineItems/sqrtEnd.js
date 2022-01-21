export default class SqrtEnd {
    constructor() {
    }
    draw(state, local_x, local_state) {
        state.ctx.strokeStyle = "red";
        state.ctx.beginPath();
        state.ctx.moveTo(local_state.sqrt_startX, local_state.sqrt_startY);
        state.ctx.lineTo(local_x, state.y);
        state.ctx.stroke();
        return 0;
    }
} //sqrt    

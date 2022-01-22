export default class LineBotEnd {
    constructor() {
    }
    draw(state, local_x, local_state) {
        state.ctx.strokeStyle = "red";
        state.ctx.beginPath();
        state.ctx.moveTo(local_state.line_bot_startX, local_state.line_bot_startY);
        state.ctx.lineTo(local_x, state.y);
        state.ctx.stroke();
        return 0;
    }
} //sqrt    

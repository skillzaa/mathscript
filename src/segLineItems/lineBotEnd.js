import SegItemAbs from "./SegItemAbs.js";
export default class LineBotEnd extends SegItemAbs {
    constructor(state) {
        super(state);
    }
    draw(state, local_state) {
        this.state.ctx.strokeStyle = "red";
        this.state.ctx.beginPath();
        this.state.ctx.moveTo(local_state.line_bot_startX, local_state.line_bot_startY);
        this.state.ctx.lineTo(state.x, this.state.y);
        this.state.ctx.stroke();
        return true;
    }
} //sqrt    

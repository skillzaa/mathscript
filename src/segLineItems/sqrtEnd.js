import SegItemAbs from "./SegItemAbs.js";
export default class SqrtEnd extends SegItemAbs {
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
        this.state.ctx.strokeStyle = "red";
        this.state.ctx.beginPath();
        this.state.ctx.moveTo(local_state.sqrt_startX, local_state.sqrt_startY);
        this.state.ctx.lineTo(state.x, this.state.y);
        this.state.ctx.stroke();
        return true;
    }
} //sqrt    

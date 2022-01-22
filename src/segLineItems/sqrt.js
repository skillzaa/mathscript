import SegItemAbs from "./SegItemAbs.js";
export default class Sqrt extends SegItemAbs {
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
        // state.ctx.font = '50px serif';  
        this.state.ctx.fillText(String.fromCodePoint(8730), state.x, this.state.y);
        let sqrt_width = this.state.ctx.measureText(String.fromCodePoint(8730)).width;
        //=====add to local state
        local_state.sqrt_startX = state.x + sqrt_width;
        local_state.sqrt_startY = this.state.y;
        // state.ctx.restore();
        return true;
    }
} //sqrt    

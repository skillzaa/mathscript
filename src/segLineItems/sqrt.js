export default class Sqrt {
    constructor() {
    }
    width() {
        return 0;
    }
    height() {
        return 0;
    }
    draw(state, local_x, local_state) {
        // state.ctx.font = '50px serif';  
        state.ctx.fillText(String.fromCodePoint(8730), local_x, state.y);
        let sqrt_width = state.ctx.measureText(String.fromCodePoint(8730)).width;
        // let content_width = state.ctx.measureText(this.content).width;
        //=====add to local state
        local_state.sqrt_startX = local_x + sqrt_width;
        local_state.sqrt_startY = state.y;
        // state.ctx.restore();
        return sqrt_width;
    }
} //sqrt    

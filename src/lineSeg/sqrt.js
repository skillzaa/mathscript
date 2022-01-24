export default class Sqrt {
    constructor(state) {
        this.state = state;
    }
    width() {
        return this.state.chars_width(String.fromCodePoint(8730));
    }
    height() {
        return this.width() * 1.5;
    }
    draw(x, y) {
        // state.ctx.font = '50px serif';  
        this.state.drawText(String.fromCodePoint(8730), x, y);
        let sqrt_width = this.state.chars_width(String.fromCodePoint(8730));
        //=====add to local state
        this.state.current_seg.sqrt_startX = x + sqrt_width;
        this.state.current_seg.sqrt_startY = y;
        // state.ctx.restore();
        return true;
    }
} //sqrt    

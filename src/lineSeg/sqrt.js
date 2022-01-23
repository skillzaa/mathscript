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
    draw() {
        // state.ctx.font = '50px serif';  
        this.state.drawText(String.fromCodePoint(8730), this.state.getX(), this.state.getY());
        let sqrt_width = this.state.chars_width(String.fromCodePoint(8730));
        //=====add to local state
        this.state.current_seg.sqrt_startX = this.state.getX() + sqrt_width;
        this.state.current_seg.sqrt_startY = this.state.getY();
        // state.ctx.restore();
        return true;
    }
} //sqrt    

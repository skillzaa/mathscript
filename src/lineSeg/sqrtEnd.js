export default class SqrtEnd {
    constructor(state) {
        this.state = state;
    }
    width() {
        return 0;
    }
    height() {
        return 0;
    }
    draw(x, y) {
        this.state.draw_line(this.state.current_seg.sqrt_startX, this.state.current_seg.sqrt_startY, x, y);
        return true;
    }
} //sqrt    

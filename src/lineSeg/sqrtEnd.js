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
    draw() {
        this.state.draw_line(this.state.current_seg.sqrt_startX, this.state.current_seg.sqrt_startY, this.state.getX(), this.state.getY());
        return true;
    }
} //sqrt    

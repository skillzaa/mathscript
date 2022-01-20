export default class SegmentItemAbs {
    constructor(state) {
        this.data = {};
        this.state = state;
        this.ctx = this.state.ctx;
        this.localX = this.state.x;
    }
    width() {
        return 55;
    }
    height() {
        return 55;
    }
    draw(arg = {}) {
    } //draw fn
}

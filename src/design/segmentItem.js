export default class SegItemAbs {
    constructor(state) {
        this.state = state;
    }
    width() {
        return 0;
    }
    height() {
        return this.width() * 1.5;
    }
    draw(state) {
        return true;
    }
}

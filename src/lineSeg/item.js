export default class Item {
    constructor(state, content = "") {
        this.state = state;
        this.content = content;
    }
    width() {
        return 0;
    }
    height() {
        return 0;
    }
    draw(x, y) {
        return true;
    }
}

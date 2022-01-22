export default class Item {
    constructor(state, content = "") {
        this.state = state;
        this.content = content;
    }
    width() {
        return this.state.chars_width(this.content);
    }
    height() {
        return this.width() * 1.5;
    }
    draw() {
        this.state.drawText(this.content);
        return true;
    }
}

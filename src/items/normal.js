import Item from "../design/item.js";
export default class Normal extends Item {
    constructor(state, content) {
        super(state);
        this.content = content;
    }
    width() {
        return this.state.chars_width(this.content);
    }
    height() {
        return this.width() * 1.25;
    }
    draw(state) {
        this.state.drawText(this.content);
        return true;
    }
}

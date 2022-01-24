import Item from "./item.js";
export default class Power extends Item {
    constructor(state, content = "x", power = "2") {
        super(state, content);
        this.power = power;
    }
    width() {
        let a = this.state.chars_width(this.content);
        let b = this.state.chars_width(this.power, this.state.getFontSize() / 2);
        return Math.ceil(a + b);
    }
    draw() {
        this.state.drawText(this.content, this.state.getX(), this.state.getY());
        let add_to_X = this.state.chars_width(this.content);
        this.state.drawText(this.power, this.state.getX() + add_to_X, this.state.getY(), this.state.getFontSize() / 2);
        return true;
    }
}

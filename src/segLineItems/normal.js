import SegItemAbs from "./SegItemAbs.js";
export default class Normal extends SegItemAbs {
    constructor(state, content) {
        super(state);
        this.content = content;
    }
    width() {
        let m = this.state.ctx.measureText(this.content);
        return m.width;
    }
    height() {
        return this.width() * 1.25;
    }
    draw(state, local_state) {
        this.state.ctx.fillText(this.content, state.x, this.state.y);
        return true;
    }
}

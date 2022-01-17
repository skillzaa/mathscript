export default class Normal {
    constructor(state, content = "xyz") {
        this.state = state;
        this.content = content;
    }
    width() {
        this.state.getFont();
        let r = this.state.ctx.measureText(this.content);
        return r.width;
    }
    draw() {
        this.state.ctx.fillText(this.content, this.state.x, this.state.y);
    }
}

export default class Normal {
    constructor(state, data = {}) {
        this.state = state;
        this.content = data.content;
    }
    width() {
        this.state.getFont();
        let r = this.state.ctx.measureText(this.content);
        return r.width;
    }
    draw(args = {}) {
        this.state.ctx.fillText(this.content, this.state.x, this.state.y);
    }
}

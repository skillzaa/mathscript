export default class Normal {
    constructor(content) {
        this.content = content;
    }
    draw(state, local_x) {
        state.ctx.fillText(this.content, local_x, state.y);
        let m = state.ctx.measureText(this.content);
        return m.width;
    }
}

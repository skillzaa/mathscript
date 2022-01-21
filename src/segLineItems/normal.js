export default class Normal {
    constructor(content) {
        this.content = content;
    }
    draw(state, starting_x) {
        state.ctx.fillText(this.content, starting_x, state.y);
        let m = state.ctx.measureText(this.content);
        return m.width;
    }
}

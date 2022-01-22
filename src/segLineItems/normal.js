export default class Normal {
    constructor(content) {
        this.content = content;
    }
    width() {
        return 0;
    }
    height() {
        return 0;
    }
    draw(state, starting_x) {
        state.ctx.fillText(this.content, starting_x, state.y);
        let m = state.ctx.measureText(this.content);
        return m.width;
    }
}

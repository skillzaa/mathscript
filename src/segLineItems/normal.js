export default class Normal {
    constructor(content) {
        this.content = content;
    }
    width() {
        return 100;
    }
    draw(state, ctx, local_x) {
        ctx.fillText(this.content, state.x, state.y);
        return this.width();
    }
}

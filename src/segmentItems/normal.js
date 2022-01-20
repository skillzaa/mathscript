export default class Normal {
    constructor(content) {
        this.content = content;
    }
    width() {
        return 100;
    }
    draw(args = {}) {
        ctx.fillText(this.content, state.x, state.y);
    }
}

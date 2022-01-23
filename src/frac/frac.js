export default class Frac {
    constructor(state, top, bot) {
        this.state = state;
        this.top = top;
        this.bot = bot;
    }
    draw() {
        this.top.draw();
        this.state.incY(this.top.height());
        this.state.decX(this.top.width());
        this.bot.draw();
        return true;
    }
    width() { return 40; }
    height() { return 20; }
}

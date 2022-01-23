export default class Frac {
    constructor(state, top, bot) {
        this.state = state;
        this.top = top;
        this.bot = bot;
    }
    draw(state) {
        this.top.draw(this.state);
        this.state.incY(this.top.height());
        this.state.decX(this.top.width());
        this.bot.draw(this.state);
        return true;
    }
    width() { return 40; }
    height() { return 20; }
}

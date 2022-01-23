import LineSeg from "../lineSeg/lineSeg.js";
export default class Frac {
    constructor(state) {
        this.state = state;
        this.top = new LineSeg(this.state);
        this.bot = new LineSeg(this.state);
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

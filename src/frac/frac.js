import LineSeg from "../lineSeg/lineSeg.js";
export default class Frac {
    constructor(state) {
        this.state = state;
        this.top = new LineSeg(this.state);
        this.bot = new LineSeg(this.state);
        this.divider_gap = 2;
    }
    draw() {
        this.top.draw();
        this.state.incY(this.top.height());
        this.state.decX(this.top.width());
        this.state.incX(this.state.current_seg.line_bot_width / 2);
        this.state.decX(this.bot.width() / 2);
        this.bot.draw();
        this.state.incX(this.bot.width() / 2);
        this.state.decX(this.state.current_seg.line_bot_width / 2);
        this.state.decY(this.top.height());
        this.state.incX(this.top.width());
        return true;
    }
    width() {
        if (this.top.width() > this.bot.width()) {
            return Math.ceil(this.top.width());
        }
        else {
            return Math.ceil(this.bot.width());
        }
    }
    height() {
        return (Math.ceil(this.top.height()) +
            Math.ceil(this.bot.height()) +
            this.divider_gap);
    }
}

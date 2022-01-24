import LineSeg from "../lineSeg/lineSeg.js";
export default class Frac {
    constructor(state) {
        this.state = state;
        this.top = new LineSeg(this.state);
        this.bot = new LineSeg(this.state);
        this.divider_gap = 2;
    }
    draw(x, y) {
        this.top.draw(x, y);
        x = x - this.top.width();
        x += this.state.current_seg.line_bot_width / 2;
        x -= this.bot.width() / 2;
        y = y + this.top.height();
        this.bot.draw(x, y);
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

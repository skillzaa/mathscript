export default class Power {
    constructor(content = "x", power = "2") {
        this.content = content;
        this.power = power;
        this.moveup = 5;
    }
    width() {
        return 0;
    }
    height() {
        return 0;
    }
    draw(state, local_x) {
        // state.ctx.save();
        const start_font_size = state.getFontSize();
        state.ctx.fillText(this.content, local_x, state.y);
        let content_width = state.ctx.measureText(this.content).width;
        state.setFontSize(start_font_size / 2);
        state.ctx.fillText(this.power, local_x + content_width, state.y - this.moveup);
        //--measure power first then reset
        let power_measur = state.ctx.measureText(this.power);
        //--now reset
        state.setFontSize(start_font_size);
        //------------------------------
        return Math.ceil(power_measur.width + content_width);
    }
}

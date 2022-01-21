export default class Power {
    constructor(data) {
        this.content = data.content;
        this.power = data.power;
        this.moveup = data.moveup || 5;
    }
    draw(state, local_x) {
        // state.ctx.save();
        const start_font_size = state.getFontSize();
        state.ctx.fillText(this.content, local_x, state.y);
        let content_width = state.ctx.measureText(this.content).width;
        state.setFontSize(start_font_size / 2);
        state.ctx.fillText(this.power, local_x + content_width, state.y - this.moveup);
        state.setFontSize(start_font_size);
        //------------------------------
        let power_measur = state.ctx.measureText(this.power);
        return Math.ceil(power_measur.width + content_width);
    }
}

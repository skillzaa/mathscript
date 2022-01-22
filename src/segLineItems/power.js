import SegItemAbs from "./SegItemAbs.js";
export default class Power extends SegItemAbs {
    constructor(state, content = "x", power = "2") {
        super(state);
        this.content = content;
        this.power = power;
        this.moveup = 5;
    }
    width() {
        const start_font_size = this.state.getFontSize();
        let content_width = this.state.ctx.measureText(this.content).width;
        this.state.setFontSize(start_font_size / 2);
        let power_measur = this.state.ctx.measureText(this.power);
        //--now reset
        this.state.setFontSize(start_font_size);
        //------------------------------
        return Math.ceil(power_measur.width + content_width);
    }
    draw(state, local_state) {
        const start_font_size = this.state.getFontSize();
        this.state.ctx.fillText(this.content, state.x, this.state.y);
        let content_width = this.state.ctx.measureText(this.content).width;
        this.state.setFontSize(start_font_size / 2);
        this.state.ctx.fillText(this.power, state.x + content_width, this.state.y - this.moveup);
        return true;
    }
}

import SegStateData from "./seg_state_data.js";
export default class State {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.fillStyle = "#1e1eea";
        this.strokeStyle = "#1e1eea";
        this.current_seg = new SegStateData();
        this.fontSize = 50;
        this.fontName = "serif";
        //--need to be changed
        this.init_ctx();
        this.resetFont();
    }
    //===================Public
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    draw_line(startX, startY, endX, endY) {
        //------------------------
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }
    set_bot_line_mid() {
        this.current_seg.line_bot_width = this.x - this.current_seg.line_bot_startX;
        this.current_seg.line_bot_mid_X = this.x + this.current_seg.line_bot_width;
    }
    load_current_seg(width, height) {
        this.current_seg = new SegStateData();
        this.current_seg.width = width;
        this.current_seg.height = height;
    }
    getFontSize() {
        return this.fontSize;
    }
    chars_width(chars = "", fontSize = this.fontSize) {
        this.ctx.save();
        //dont miss gap "px_"
        let f = fontSize + "px " + this.fontName;
        this.ctx.font = f;
        let m = this.ctx.measureText(chars).width;
        this.ctx.restore();
        return Math.ceil(m);
    }
    drawText(content = "", x = 0, y = 0, fontSize = this.fontSize) {
        this.ctx.save();
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.fillStyle;
        let f = fontSize + "px " + this.fontName;
        this.ctx.font = f;
        this.ctx.fillText(content, x, y);
        this.ctx.restore();
    }
    drawTextDelta(content = "", fontSize = this.fontSize, deltaX = 0, deltaY = 0) {
        this.ctx.save();
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.fillStyle;
        let f = fontSize + "px " + this.fontName;
        this.ctx.font = f;
        this.ctx.fillText(content, this.x + deltaX, this.y + deltaY);
        this.ctx.restore();
    }
    //==============Private
    setFontSize(n) {
        this.fontSize = n;
        this.resetFont();
    }
    setFontName(n) {
        this.fontName = n;
        this.resetFont();
    }
    restoreCtx() {
        this.ctx.restore();
    }
    saveCtx() {
        this.ctx.save();
    }
    resetFont() {
        this.ctx.font = this.fontSize + "px " + this.fontName;
    }
    init_ctx() {
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.strokeStyle = this.strokeStyle;
    }
    //--deprecated-23-jan-2022
    addX(n) {
        this.x = this.x + n;
    }
    incX(n) {
        this.x = this.x + n;
    }
    decX(n) {
        this.x = this.x - n;
    }
    //--depricated 23-jan-2022
    addY(n) {
        this.y = this.y + n;
    }
    incY(n) {
        this.y = this.y + n;
    }
    decY(n) {
        this.y = this.y - n;
    }
}

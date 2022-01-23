import SegStateData from "./seg_state_data.js";
export default class State {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.ctx = ctx;
        this.current_seg = new SegStateData();
        this.x = 100;
        this.y = 100;
        this.fontSize = 50;
        this.fontName = "serif";
        //--need to be changed
        this.resetFont();
    }
    //===================Public
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    draw_line_top() {
        this.ctx.strokeStyle = "red";
        this.ctx.beginPath();
        this.ctx.moveTo(this.current_seg.line_top_startX, this.current_seg.line_top_startY);
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
    }
    draw_line_bot() {
        this.ctx.strokeStyle = "red";
        this.ctx.beginPath();
        this.ctx.moveTo(this.current_seg.line_bot_startX, this.current_seg.line_bot_startY);
        this.ctx.lineTo(this.x, this.current_seg.line_bot_startY);
        this.ctx.stroke();
    }
    load_current_seg(width, height) {
        this.current_seg = new SegStateData();
        this.current_seg.width = width;
        this.current_seg.height = height;
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
    drawText(content = "", fontSize = this.fontSize, deltaX = 0, deltaY = 0) {
        this.ctx.save();
        //dont miss gap "px_"
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
    canvas_width() {
        return this.canvas.width;
    }
    canvas_height() {
        return this.canvas.height;
    }
}

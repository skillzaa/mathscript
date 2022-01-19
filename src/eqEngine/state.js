export default class State {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = 100;
        this.y = 100;
        this.fontSize = 50;
        this.fontName = "serif";
        this.fontColor = "#281be2";
        this.strokeStyle = "#281be2";
        //--need to be changed
        this.ctx.fillStyle = this.fontColor;
        this.ctx.strokeStyle = this.strokeStyle;
        this.resetFont();
    }
    getFontSize() {
        return this.fontSize;
    }
    chars_width(chars = "") {
        let m = this.ctx.measureText(chars);
        return Math.ceil(m.width);
    }
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
    getFont() {
        return this.ctx.font;
    }
}

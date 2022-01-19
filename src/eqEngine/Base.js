export default class Base {
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
        // this.resetFont();
    }
    width_all() {
        for (let i = 0; i < this.eq.length; i++) {
            let measurements = this.ctx.measureText(this.eq[i].content);
            this.eq[i].width = Math.ceil(measurements.width);
            // this.ctx.fillText(this.eq[i].content, this.eq[i].x, this.eq[i].y);
            console.log(this.eq[i].content, this.eq[i].width);
        }
    }
} //ends

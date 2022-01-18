export default class EqEnginge {
    constructor(canvas, eq = []) {
        this.eq = [];
        this.eq = eq;
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
    calculate() {
        for (let i = 0; i < this.eq.length; i++) {
            let measurements = this.ctx.measureText(this.eq[i].content);
            this.eq[i].width = Math.ceil(measurements.width);
            // this.ctx.fillText(this.eq[i].content, this.eq[i].x, this.eq[i].y);
            console.log(this.eq[i].content, this.eq[i].width);
        }
    }
    draw() {
        let x = 200;
        let y = 200;
        for (let i = 0; i < this.eq.length; i++) {
            switch (this.eq[i].type) {
                case "normal":
                    this.ctx.fillText(this.eq[i].content, x, y);
                    break;
                case "power":
                    this.ctx.save();
                    this.ctx.font = '25px serif';
                    this.ctx.fillText(this.eq[i].content, x, y);
                    this.ctx.restore();
                    break;
                case "sqrt":
                    this.ctx.save();
                    this.ctx.font = '50px serif';
                    this.ctx.fillText(String.fromCodePoint(8730), x, y);
                    this.ctx.restore();
                    break;
                case "icon":
                    this.ctx.save();
                    this.ctx.font = '50px serif';
                    this.ctx.fillText(String.fromCodePoint(this.eq[i].icon), x, y);
                    this.ctx.restore();
                    break;
                default:
                    console.log("unknown type", this.eq[i].type);
                    break;
            }
            x = x + this.eq[i].width;
            // console.log(this.eq[i]);   
        }
    }
} //ends

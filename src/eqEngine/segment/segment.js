import Power from "./power.js";
export default class Segment {
    constructor(state) {
        this.state = state;
        this.localX = this.state.x;
        this.localY = this.state.y;
        this.eq = [
            { type: "power", content: "c", power: "2" }
        ];
    }
    draw(arg = {}) {
        for (let i = 0; i < this.eq.length; i++) {
            switch (this.eq[i].type) {
                // case "normal":
                //     this.state.ctx.fillText(this.eq[i].content,this.state.x,this.state.y);  
                //     this.state.x = this.state.x + this.eq[i].width;
                //     break;
                // case "ss":
                // this.state.ctx.save();
                // this.state.ctx.font = '25px serif';
                // this.state.ctx.fillText(this.eq[i].content,this.state.x,this.state.y);  
                // this.state.ctx.restore();
                // this.state.x = this.state.x + this.eq[i].width;
                // break;
                // case "sqrt":
                //         sqrt(this.state,this.eq[i]);
                //     //    this.state.x = this.state.x + this.eq[i].width;
                //         this.state.x = this.state.x + this.eq[i].width;
                // break;
                case "power":
                    let p = new Power(this.state, this.eq[i].content, this.eq[i].power);
                    p.draw();
                    this.state.x = this.state.x + p.width();
                    break;
                case "icon":
                    this.state.ctx.save();
                    this.state.ctx.font = '50px serif';
                    this.state.ctx.fillText(String.fromCodePoint(this.eq[i].icon), this.state.x, this.state.y);
                    this.state.ctx.restore();
                    this.state.x = this.state.x + 30;
                    break;
                default:
                    console.log("unknown type", this.eq[i].type);
                    break;
            }
        }
        return { x: 66, y: 54 };
    } //draw fn
}

import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";

export default class Special implements ISegment {
    content:number; 
constructor (content= 128103){
this.content = content;  
}


draw(state:State,local_x:number):number{

    // strokeText("\u{1D120}", 10, 50);
    // let ccc = "{" + this.content + "}";
    // let ddd = "\\u" + ccc;
// this.state.ctx.fillText(ddd, this.state.x, this.state.y);
// let ff = "\u00A9"
//hexstring = "\\u" +"00A9";

// this.state.ctx.fillText(String.fromCodePoint(parseInt(this.content,16)),this.state.x, this.state.y);
// this.state.ctx.fillText(String.fromCodePoint(55358, 56614),this.state.x, this.state.y);
state.ctx.fillText(String.fromCodePoint(this.content),local_x, state.y);

let width = state.ctx.measureText(this.content.toString()).width;
return width;
// fromCharCode(55358, 56614)
// this.state.ctx.fillText(String.fromCodePoint(parseInt("2122", 16)),this.state.x, this.state.y);
// this.state.ctx.fillText(this.content, 
}

}
import ISegment from "../latMachine/Isegment.js";
import LocalState from "../segLine/localState.js";
import State from "../state.js";
import SegItemAbs from "./SegItemAbs.js";

export default class Special extends SegItemAbs implements ISegment {
    content:number; 
constructor (state:State,content= 128103){
super(state);
        
this.content = content;  
}

draw(state:State, local_state:LocalState):boolean{

    // strokeText("\u{1D120}", 10, 50);
    // let ccc = "{" + this.content + "}";
    // let ddd = "\\u" + ccc;
// this.state.ctx.fillText(ddd, this.state.x, this.state.y);
// let ff = "\u00A9"
//hexstring = "\\u" +"00A9";

// this.state.ctx.fillText(String.fromCodePoint(parseInt(this.content,16)),this.state.x, this.state.y);
// this.state.ctx.fillText(String.fromCodePoint(55358, 56614),this.state.x, this.state.y);
this.state.ctx.fillText(String.fromCodePoint(this.content),state.x, this.state.y);

let width = this.state.ctx.measureText(this.content.toString()).width;
return true;
}

}
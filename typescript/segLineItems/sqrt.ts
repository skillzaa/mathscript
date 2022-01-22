import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";
import SegItemAbs from "./SegItemAbs.js";

export default class Sqrt extends SegItemAbs implements ISegment {
constructor(state:State){
super(state);
}  
width():number {
return  this.state.ctx.measureText(String.fromCodePoint(8730)).width; 
}
height():number {
return this.width() * 1.5;   
}   
draw(state:State,local_state:LocalState):boolean{
    // state.ctx.font = '50px serif';  
    this.state.ctx.fillText(String.fromCodePoint(8730),state.x,this.state.y);

    let sqrt_width = this.state.ctx.measureText(String.fromCodePoint(8730)).width;

    //=====add to local state
    local_state.sqrt_startX = state.x + sqrt_width;
    local_state.sqrt_startY = this.state.y;
    // state.ctx.restore();
    return true;
}
}//sqrt    


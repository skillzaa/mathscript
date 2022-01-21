import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import SegLine from "../segLine/segLine.js";

export default class Fraction implements ISegment {
private upper:SegLine; 
private lower:SegLine; 
public divider:boolean;
constructor (upper:SegLine,lower:SegLine){
this.upper = upper;  
this.lower = lower;  
this.divider = true;
}


draw(state:State,starting_x:number):number{
this.upper.draw(state,starting_x);   
//---widths 
// let upper_width = state.ctx.measureText(this.upper.) 
let old_y = state.y;
state.y += 30;
this.lower.draw(state,starting_x);    
state.y = old_y;

return 100;
// state.ctx.fillText(this.content, starting_x, state.y);
// let m = state.ctx.measureText(this.content); 
// return m.width;
}

}
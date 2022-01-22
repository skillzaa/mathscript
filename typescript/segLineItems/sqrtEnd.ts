import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";
import SegItemAbs from "./SegItemAbs.js";


export default class SqrtEnd extends SegItemAbs implements ISegment {
constructor (state:State){
super(state);
}
width():number {
return 0;    
}
height():number {
return 0;    
}
draw(state:State,local_state:LocalState):boolean{
  
    this.state.ctx.strokeStyle = "red";
    this.state.ctx.beginPath();

    this.state.ctx.moveTo(local_state.sqrt_startX,local_state.sqrt_startY);
    this.state.ctx.lineTo(state.x , this.state.y);
    this.state.ctx.stroke();
 return true;   
}
}//sqrt    


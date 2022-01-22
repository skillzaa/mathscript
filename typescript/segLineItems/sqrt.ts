import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";

export default class Sqrt implements ISegment {
constructor(){
    
}  
width():number {
return 0;    
}
height():number {
return 0;    
}   
draw(state:State,local_x:number,local_state:LocalState):number{
    // state.ctx.font = '50px serif';  
    state.ctx.fillText(String.fromCodePoint(8730),local_x,state.y);

    let sqrt_width = state.ctx.measureText(String.fromCodePoint(8730)).width;

    // let content_width = state.ctx.measureText(this.content).width;

    //=====add to local state
    local_state.sqrt_startX = local_x + sqrt_width;
    local_state.sqrt_startY = state.y;
    // state.ctx.restore();
 return sqrt_width;   
}
}//sqrt    


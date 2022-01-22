import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";


export default class LineTopEnd implements ISegment {
constructor (){

}
width():number {
return 0;    
}
height():number {
return 0;    
}
draw(state:State,local_x:number,local_state:LocalState):number{
  
    state.ctx.strokeStyle = "red";
    state.ctx.beginPath();

    state.ctx.moveTo(local_state.line_top_startX,local_state.line_top_startY);
    state.ctx.lineTo(local_x , state.y);
    state.ctx.stroke();
 return 0;   
}
}//sqrt    


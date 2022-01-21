import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";


export default class SqrtEnd implements ISegment {
constructor (){

}

draw(state:State,local_x:number,local_state:LocalState):number{
  
    state.ctx.strokeStyle = "red";
    state.ctx.beginPath();

    state.ctx.moveTo(local_state.sqrt_startX,local_state.sqrt_startY);
    state.ctx.lineTo(local_x , state.y);
    state.ctx.stroke();
 return 0;   
}
}//sqrt    


import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";

export default class LineBot implements ISegment {
// protected state:State;    
constructor(){
// this.state = state;    
} 
width():number {
return 0;    
}
height():number {
return 0;    
}
draw(state:State,local_x:number,local_state:LocalState):number{
    //=====add to local state
    local_state.line_bot_startX = local_x;
    local_state.line_bot_startY = state.y;
 return 0;   
}
}//sqrt    


import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";

export default class LineTop implements ISegment {
constructor(){
}     
draw(state:State,local_x:number,local_state:LocalState):number{
    //=====add to local state
    local_state.divider_startX = local_x;
    local_state.divider_startY = state.y;
 return 0;   
}
}//sqrt    


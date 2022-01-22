import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";
import SegItemAbs from "./SegItemAbs.js";

export default class LineTop extends SegItemAbs implements ISegment {
constructor(state:State){
super(state);

} 
width():number {
return 0;    
}
height():number {
return 0;    
}    
draw(state:State,local_state:LocalState):boolean{
    //=====add to local state
    local_state.line_top_startX = state.x;
    local_state.line_top_startY = this.state.y;
    return true;
}
}//sqrt    


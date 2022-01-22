import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";

export default class SegItemAbs implements ISegment {
state:State; 
constructor (state:State){
this.state = state;  
}
width():number {
return 0;    
}
height():number {
return this.width() * 1.5;    
}

draw(state:State, local_state:LocalState):boolean{
return true;
}

}
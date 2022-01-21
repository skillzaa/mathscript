import ISegment from "./Isegment.js";
import State from "../state.js";

export default class LatMachine{
private segments:ISegment[] =[];
constructor (){
this.segments = [];  
} 
//--function arguments shd be arguments and not classes unless required absoliutely.
draw(state:State):number{    
let local_x = state.x;    
for (let i = 0; i < this.segments.length; i++) {
        let delta_x = this.segments[i].draw(state,local_x);
        local_x += delta_x;
}
return local_x;
}
//--so a lat machine can always get segments from outside as long as they complyby ISegment interface
add_segment(segment:ISegment){
this.segments.push(segment);
return segment;
}
}//ends
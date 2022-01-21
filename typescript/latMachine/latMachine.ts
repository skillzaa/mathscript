import ISegment from "./Isegment.js";
import State from "../state.js";

export default class LatMachine implements ISegment{

private segments:ISegment[] =[];
public segment_gap:number;

constructor (){
this.segments = [];  
this.segment_gap = 5;
} 
//--function arguments shd be concrete data types and not classes / objects unless required absoliutely.
draw(state:State,starting_x:number=0):number{    
let local_x = starting_x;    
for (let i = 0; i < this.segments.length; i++) {
        //-----save state ctx here
        state.ctx.save();
        let delta_x = this.segments[i].draw(state,local_x);
        //-----restore state ctx here
        state.ctx.restore();
        local_x += delta_x + this.segment_gap;
}
return local_x;
}
//--so a lat machine can always get segments from outside as long as they complyby ISegment interface
add_segment(segment:ISegment){
this.segments.push(segment);
return segment;
}
}//ends
import State from "./state.js";
import LineSeg from "../lineSeg/lineSeg.js";
import Frac from "../frac/frac.js";
import ISegment from "./Isegment.js";

export default class SegFactory {
private state:State;
private add_new_seg_fn:(segment:ISegment) => ISegment; 

constructor(state:State,add_new_seg_fn:(segment:ISegment) => ISegment){
this.state = state;   
this.add_new_seg_fn = add_new_seg_fn; 
}

lineSeg(){
let i = new LineSeg(this.state);
this.add_new_seg_fn(i);
return i;
}
frac(){
let i = new Frac(this.state);
this.add_new_seg_fn(i);
return i;
}





}
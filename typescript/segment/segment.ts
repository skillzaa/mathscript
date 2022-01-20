import State from "../state.js";
import ISegment from "./Isegment.js";
import DrawResult from "./drawResult.js";
import Power from "../segmentItems/power.js"
import Normal from "../segmentItems/normal.js"

/*
Base Segment implements ISegment as well as iterate over an array of ISegments. This is easy to understand if we thing in terms of behaviour and not data. Since it is a segment as well as an iterator over an array of segments this in draw it has to evaluate every item.day result and final send its own result.
*/

export default class Segment implements ISegment{
private state:State;
private eq:ISegment[];
private localX:number;

constructor(state:State){
this.state = state;
this.localX = this.state.x;    
this.eq = [];    
}
width(){
    return 10;
}
draw(arg={}):DrawResult{ 
let final_r = new DrawResult();      

for (let i = 0; i < this.eq.length; i++) {
    let r = this.eq[i].draw({});
    this.state.addX(this.eq[i].width());
}

return final_r;
}//draw fn

insert_power(data={}){
    let p = new Power(this.state,data);
    this.eq.push(p);
}
insert_normal(data={}){
    let n = new Normal(this.state,data);
    this.eq.push(n);
}
}
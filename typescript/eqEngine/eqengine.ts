import State from "../state.js";
import ISegment from "../segment/Isegment.js";
import Segment from "../segment/segment.js";

export default class EqEnginge{
    eq:[ISegment]|[]=[];
    state:State;

constructor (canvas:any){
this.eq = [];  
this.state = new State(canvas);
} 

draw(){    
for (let i = 0; i < this.eq.length; i++) {
        let result = this.eq[i].draw({});
        this.state.x = this.state.x + result.x;
}
console.log("equation draw complete");
}

insert(){
let s = new Segment(this.state);
this.eq.push(s);
return s;
}

}//ends
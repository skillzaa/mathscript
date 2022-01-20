import State from "../state.js";
import DrawResult from "./drawResult.js";

export default class SegmentItemAbs{
protected state:State;
protected data:object={};
protected localX:number;
protected ctx:any;

constructor(state:State){
this.state = state;
this.ctx = this.state.ctx;
this.localX = this.state.x;    
}
width():number{
    return 55;
}
height():number{
return 55;
}
draw(arg={}):DrawResult{ 
return new DrawResult();      
}//draw fn

}
import State from "../state.js";
import ISegment from "../segment/Isegment.js";
import DrawResult from "./drawResult.js";

export default class Normal implements ISegment {
    content:string; 
    state:State;   
constructor (state:State,data={}){
this.state = state;  
this.content = data.content;  
}
width():number{
this.state.getFont();
let r = this.state.ctx.measureText(this.content);
return r.width;    
}


draw(args={}):void{
this.state.ctx.fillText(this.content, this.state.x, this.state.y);
}

}
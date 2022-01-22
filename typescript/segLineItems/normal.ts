import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import SegItemAbs from "./SegItemAbs.js";

export default class Normal extends SegItemAbs implements ISegment {
content:string; 
constructor (state:State, content:string){
    super(state);
this.content = content;  
}
width():number {
let m = this.state.ctx.measureText(this.content); 
return m.width;
}
height():number {
return this.width() * 1.25;    
}

draw(state:State, local_state:any):boolean{
    this.state.ctx.fillText(this.content, state.x, this.state.y);
    return true;
}

}
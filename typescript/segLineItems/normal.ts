import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";

export default class Normal implements ISegment {
content:string; 
constructor (content:string){
this.content = content;  
}


draw(state:State,local_x:number):number{
state.ctx.fillText(this.content, local_x, state.y);
let m = state.ctx.measureText(this.content); 
return m.width;
}

}
import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";

export default class Normal implements ISegment {
content:string; 
constructor (content:string){
this.content = content;  
}
width():number {
return 0;    
}
height():number {
return 0;    
}

draw(state:State,starting_x:number):number{
state.ctx.fillText(this.content, starting_x, state.y);
let m = state.ctx.measureText(this.content); 
return m.width;
}

}
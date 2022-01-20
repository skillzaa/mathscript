import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";

export default class Normal implements ISegment {
content:string; 
constructor (content:string){
this.content = content;  
}

width():number{
return 100;    
}


draw(state:State,ctx:CanvasRenderingContext2D,local_x:number):number{
ctx.fillText(this.content, state.x, state.y);
return this.width();
}

}
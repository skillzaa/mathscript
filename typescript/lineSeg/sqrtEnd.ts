import State from "../design/state.js";
import IDrawable from "../design/IDrawable.js";



export default class SqrtEnd implements IDrawable {
    state:State;
constructor (state:State){
this.state=state;    
}
width():number {
return 0;    
}
height():number {
return 0;    
}
draw(x :number,y :number):boolean{
  this.state.draw_line(this.state.current_seg.sqrt_startX,this.state.current_seg.sqrt_startY,x,y);

 return true;   
}
}//sqrt    

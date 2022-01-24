import State from "../design/state.js";
import IDrawable from "../design/IDrawable.js";



export default class Sqrt implements IDrawable {
    state:State;
constructor(state:State){
this.state = state;
}  
width():number {
return this.state.chars_width(String.fromCodePoint(8730));
}
height():number {
return this.width() * 1.5;   
}   
draw(x :number,y :number):boolean{
    // state.ctx.font = '50px serif';  
    this.state.drawText(String.fromCodePoint(8730),x,y);
    
    let sqrt_width = this.state.chars_width(String.fromCodePoint(8730));

    //=====add to local state
    this.state.current_seg.sqrt_startX = x + sqrt_width;
    this.state.current_seg.sqrt_startY = y;
    // state.ctx.restore();
    return true;
}
}//sqrt    

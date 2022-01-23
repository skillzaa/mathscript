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
draw():boolean{
    // state.ctx.font = '50px serif';  
    this.state.drawText(String.fromCodePoint(8730),this.state.getX(),this.state.getY());
    
    let sqrt_width = this.state.chars_width(String.fromCodePoint(8730));

    //=====add to local state
    this.state.current_seg.sqrt_startX = this.state.getX() + sqrt_width;
    this.state.current_seg.sqrt_startY = this.state.getY();
    // state.ctx.restore();
    return true;
}
}//sqrt    

import State from "../design/state.js";
import LineSeg  from "../lineSeg/lineSeg.js";
import IDrawable from "../design/IDrawable.js";

export default class Frac implements IDrawable {
private state:State;
public top:LineSeg;
public bot:LineSeg;
public divider_gap:number;
constructor(state:State){
this.state = state;    
this.top = new LineSeg(this.state);
this.bot = new LineSeg(this.state);
this.divider_gap = 2;
}

draw(x :number,y :number): boolean {
    this.top.draw(x,y);
    x = x -  this.top.width();
    x += this.state.current_seg.line_bot_width/2;
    x -= this.bot.width()/2;
    y = y + this.top.height();

    this.bot.draw(x,y);
    return true
}
width():number{
if (this.top.width() > this.bot.width()){
    return Math.ceil(this.top.width());
}else {
    return Math.ceil(this.bot.width());
}
}
height(){
return (
    Math.ceil(this.top.height()) +
    Math.ceil(this.bot.height()) +  
    this.divider_gap     
);    
}
}
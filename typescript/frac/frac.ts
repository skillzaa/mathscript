import State from "../design/state.js";
import LineSeg  from "../lineSeg/lineSeg.js";
import ISegment from "../design/Isegment.js";

export default class Frac implements ISegment {
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

draw(): boolean {
    this.top.draw();

    this.state.incY(this.top.height());
    this.state.decX(this.top.width());
    this.bot.draw();
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
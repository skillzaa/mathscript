import State from "../design/state.js";
import LineSeg  from "../lineSeg/lineSeg.js";
import ISegment from "../design/Isegment.js";

export default class Frac implements ISegment {
private state:State;
public top:LineSeg;
public bot:LineSeg;
constructor(state:State){
this.state = state;    
this.top = new LineSeg(this.state);
this.bot = new LineSeg(this.state);
}

draw(): boolean {
    this.top.draw();

    this.state.incY(this.top.height());
    this.state.decX(this.top.width());
    this.bot.draw();
    return true
}
width(){return 40;}
height(){return 20;}
}
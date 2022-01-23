import State from "../design/state.js";
import LineSeg  from "../lineSeg/lineSeg.js";
import ISegment from "../design/Isegment.js";

export default class Frac implements ISegment {
private state:State;
private top:LineSeg;
private bot:LineSeg;
constructor(state:State,top:LineSeg,bot:LineSeg){
this.state = state;    
this.top = top;
this.bot = bot;
}

draw(state: State): boolean {
    this.top.draw(this.state);

    this.state.incY(this.top.height());
    this.state.decX(this.top.width());
    this.bot.draw(this.state);
    return true
}
width(){return 40;}
height(){return 20;}
}
import Item from "./item.js";
import State from "../design/state.js";


export default class LineBot extends Item {
constructor(state:State){
    super(state)
}
draw(x :number,y :number):boolean{
    //=====add to local state
    this.state.current_seg.line_bot_startX = x;
    this.state.current_seg.line_bot_startY = y + this.state.current_seg.height;
    // console.log(this.state);
    return true;
}

}
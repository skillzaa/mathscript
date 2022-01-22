import Item from "../design/item.js";
import State from "../design/state.js";


export default class LineBot extends Item {
constructor(state:State){
    super(state)
}
draw():boolean{
    //=====add to local state
    this.state.current_seg.line_bot_startX = this.state.getX();
    this.state.current_seg.line_bot_startY = this.state.getY() + this.state.current_seg.height;
    console.log(this.state);
    return true;
}

}
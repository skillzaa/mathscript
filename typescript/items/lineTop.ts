import Item from "../design/item.js";
import State from "../design/state.js";


export default class LineTop extends Item {
constructor(state:State){
    super(state)
}
draw():boolean{
    //=====add to local state
    this.state.current_seg.line_top_startX = this.state.getX();
    this.state.current_seg.line_top_startY = this.state.getY();
    // console.log(this.state);
    return true;
}

}
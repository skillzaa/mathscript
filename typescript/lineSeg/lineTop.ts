import Item from "./item.js";
import State from "../design/state.js";


export default class LineTop extends Item {
constructor(state:State){
    super(state)
}
draw(x :number,y :number):boolean{
    //=====add to local state
    this.state.current_seg.line_top_startX = x;
    this.state.current_seg.line_top_startY = y;
    // console.log(this.state);
    return true;
}

}
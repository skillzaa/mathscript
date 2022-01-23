import Item from "./item.js";
import State from "../design/state.js";


export default class LineTopEnd extends Item {
constructor(state:State){
    super(state)
}
draw():boolean{
    //=====add to local state
    this.state.draw_line_top();
    return true;
}

}
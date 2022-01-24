import Item from "./item.js";
import State from "../design/state.js";


export default class LineBotEnd extends Item {
constructor(state:State){
    super(state)
}
draw():boolean{
    //=====add to local state
    this.state.draw_line(
        this.state.current_seg.line_bot_startX,
        this.state.current_seg.line_bot_startY,
        this.state.getX(),
        this.state.current_seg.line_bot_startY
    )

    this.state.set_bot_line_mid();
    return true;
}

}
import Item from "./item.js";
import State from "../design/state.js";


export default class LineBotEnd extends Item {
constructor(state:State){
    super(state)
}
draw():boolean{
    //=====add to local state
    this.state.draw_line_bot();
    this.state.set_bot_line_mid();
    // console.log("set_bot_line_mid",this.state);
    return true;
}

}
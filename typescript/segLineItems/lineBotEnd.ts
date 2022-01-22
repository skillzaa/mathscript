import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";
import SegItemAbs from "./SegItemAbs.js";


export default class LineBotEnd extends SegItemAbs implements ISegment {
constructor (state:State){
super(state);
}

draw(state:State,local_state:LocalState):boolean{
  
    this.state.ctx.strokeStyle = "red";
    this.state.ctx.beginPath();

    this.state.ctx.moveTo(local_state.line_bot_startX,local_state.line_bot_startY);
    this.state.ctx.lineTo(state.x , this.state.y);
    this.state.ctx.stroke();
    return true;
}
}//sqrt    


import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import SegItemAbs from "./SegItemAbs.js";
import LocalState from "../segLine/localState.js";

export default class Power extends SegItemAbs implements ISegment {
private content:string;
private power:string;
public moveup:number;
    
constructor (state:State,content:string="x",power:string="2"){
    super(state);
this.content = content;
this.power = power;
this.moveup = 5;
}
width():number {
const start_font_size =  this.state.getFontSize();
let content_width = this.state.ctx.measureText(this.content).width;
this.state.setFontSize(start_font_size/2);
let power_measur = this.state.ctx.measureText(this.power);
//--now reset
this.state.setFontSize(start_font_size);
//------------------------------

return Math.ceil(power_measur.width + content_width);        
}

draw(state:State,local_state:LocalState):boolean{
const start_font_size =  this.state.getFontSize();
this.state.ctx.fillText(this.content, state.x, this.state.y);

let content_width = this.state.ctx.measureText(this.content).width;

this.state.setFontSize(start_font_size/2);
this.state.ctx.fillText(this.power, state.x + content_width , this.state.y - this.moveup);
//--must set font size back;
this.state.setFontSize(start_font_size);
return true;
}

}
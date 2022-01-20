import State from "../state.js";
import DrawResult from "./drawResult.js.js";
import SegmentItemAbs from "./segmentItem.js.js";

let power_data = {
    content:"",
    power: "2",
    moveup:5,

}
export default class Power extends SegmentItemAbs {
private content:string;
private power:string;
public moveup:number;
    
constructor (state:State,data={}){
super(state)    
this.content = data.content;
this.power = data.power;
this.moveup = data.moveup || 5;
}
width(){
let measurements = this.ctx.measureText(this.content);
let power_measur = this.ctx.measureText(this.power);
return Math.ceil(power_measur.width + measurements.width);    
}
height(){
    return this.width() * 1.5;    
}
draw(arg={}):void{
    // this.state.saveCtx();    
    const start_font_size =  this.state.getFontSize();
    this.ctx.fillText(this.content, this.state.x, this.state.y);
    let measurements = this.ctx.measureText(this.content);
    let content_width = measurements.width; 
    this.state.setFontSize(start_font_size/2);
    this.ctx.fillText(this.power, this.state.x + content_width , this.state.y - this.moveup);
    this.state.setFontSize(start_font_size);
    // this.state.restoreCtx();
///////    
}

}
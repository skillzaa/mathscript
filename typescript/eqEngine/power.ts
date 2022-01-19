import State from "../state.js";

export default class Power {
public state:State;
private content:string;
private power:string;
public moveup:number;
    
constructor (state:State,content="x",power="2"){
this.state = state;    
this.content = content;
this.power = power;
this.moveup = 5;
}
width(){
// this.state.ctx.save();    
// this.state.setFontSize
let measurements = this.state.ctx.measureText(this.content);
// this.state.ctx.font = (this.fontSize/2) + 'px ' + this.fontName;
let power_measur = this.state.ctx.measureText(this.power);
// this.state.ctx.restore();
return Math.ceil(power_measur.width + measurements.width);    
}
height(){
return this.width() * 1.5;    
}
draw(){
this.state.saveCtx();    
const start_font_size =  this.state.getFontSize();
this.state.ctx.fillText(this.content, this.state.x, this.state.y);
let measurements = this.state.ctx.measureText(this.content);
let content_width = measurements.width; 
// this.state.ctx.font = (this.fontSize/2) + 'px ' + this.fontName;
// this.state.saveCtx();
this.state.setFontSize(start_font_size/2);
this.state.ctx.fillText(this.power, this.state.x + content_width , this.state.y - this.moveup);
this.state.setFontSize(start_font_size);
this.state.restoreCtx();
}

}
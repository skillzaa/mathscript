

export default class Power {
constructor (state,item="x",power="2"){
this.state = state;    
this.item = item;
this.power = power;
this.moveup = 5;
}
width(){
this.state.ctx.save();    
this.state.ctx.font = this.fontSize + 'px ' + this.fontName;
let measurements = this.state.ctx.measureText(this.item);
this.state.ctx.font = (this.fontSize/2) + 'px ' + this.fontName;
let power_measur = this.state.ctx.measureText(this.power);
this.state.ctx.restore();
return (power_measur.width + measurements.width);    
}
height(){
return this.width() * 1.5;    
}
draw(){
const start_font_size =  this.state.getFontSize();
this.state.ctx.fillText(this.item, this.state.x, this.state.y);
let measurements = this.state.ctx.measureText(this.item);
let item_width = measurements.width; 
this.state.set
// this.state.ctx.font = (this.fontSize/2) + 'px ' + this.fontName;
this.state.setFontSize(start_font_size/2);
this.state.ctx.fillText(this.power, this.state.x + item_width , this.state.y - this.moveup);
}

}
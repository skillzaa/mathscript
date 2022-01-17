

export default class Power {
constructor (canvas,item="x",power="2"){
this.canvas = canvas;
this.ctx = canvas.getContext('2d');
this.item = item;
this.power = power;
this.x = 100;
this.y = 100;
this.moveup = 5;
this.fontSize = 50;
this.fontName = "serif";
}
width(){
this.ctx.save();    
this.ctx.font = this.fontSize + 'px ' + this.fontName;
let measurements = this.ctx.measureText(this.item);
this.ctx.font = (this.fontSize/2) + 'px ' + this.fontName;
let power_measur = this.ctx.measureText(this.power);
this.ctx.restore();
return (power_measur.width + measurements.width);    
}
height(){
return this.width() * 1.5;    
}
draw(){
this.ctx.font = this.fontSize + 'px ' + this.fontName;
this.ctx.fillText(this.item, this.x, this.y);
let measurements = this.ctx.measureText(this.item);
let item_width = measurements.width; 

this.ctx.font = (this.fontSize/2) + 'px ' + this.fontName;
this.ctx.fillText(this.power, this.x + item_width , this.y - this.moveup);
}

}
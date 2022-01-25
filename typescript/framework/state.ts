
/** DrawEngine is concerned with drawing and templating it does not care about x or y */
export default class State {
canvas:HTMLCanvasElement;
ctx: CanvasRenderingContext2D;
public fontName :string;
public fontSize :number;
public fillStyle :string;
public strokeStyle :string;

constructor(){
// @ts-expect-error    
this.canvas = document.getElementById("crown");
// @ts-expect-error    
this.ctx = this.canvas.getContext('2d');
this.fillStyle = "#1e1eea";
this.strokeStyle = "#1e1eea";
this.fontSize = 100;
this.fontName = "serif";
}
public chars_width(chars="",fontSize =this.fontSize , fontName=this.fontName){
this.ctx.save();
//dont miss gap "px_"
let f = this.fontSize + "px " + this.fontName;
this.ctx.font = f;
let m = this.ctx.measureText(chars).width;
this.ctx.restore();
return Math.ceil(m);    
}
public draw_line(startX:number,startY:number,endX:number,endY:number){
    this.ctx.beginPath();
    this.ctx.moveTo(startX,startY);
    this.ctx.lineTo(endX,endY);
    this.ctx.stroke();
}
public drawText(content:string,x:number,y:number){
let f = this.fontSize + "px " + this.fontName;
this.ctx.font = f;

    //--must
    this.ctx.textBaseline = "top";
    this.ctx.fillText(content, x, y);
}

}
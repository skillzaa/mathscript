import SegStateData from "./seg_state_data.js";

export default class State {
private x:number;
private y:number;
private ctx:CanvasRenderingContext2D;

private fontSize:number;
private fontName:string;
// private canvas: HTMLCanvasElement;
public current_seg:SegStateData;
public fillStyle:string;
public strokeStyle:string;

constructor (ctx:CanvasRenderingContext2D,x:number,y:number){
this.ctx = ctx;
this.x = x;
this.y = y;
this.fillStyle = "#1e1eea";
this.strokeStyle = "#1e1eea";
this.current_seg = new SegStateData();
this.fontSize = 50;
this.fontName = "serif";
//--need to be changed
this.init_ctx();
this.resetFont();
}
//===================Public
public getX():number{
  return   this.x;
}
public getY():number{
  return   this.y;
}

public draw_line(startX:number,startY:number,endX:number,endY:number){
    //------------------------
    this.ctx.strokeStyle = this.strokeStyle;
    this.ctx.fillStyle = this.fillStyle;

    this.ctx.beginPath();
    this.ctx.moveTo(startX,startY);
    this.ctx.lineTo(endX,endY);
    this.ctx.stroke();
}
public set_bot_line_mid(){
    this.current_seg.line_bot_width = this.x - this.current_seg.line_bot_startX;
    this.current_seg.line_bot_mid_X = this.x + this.current_seg.line_bot_width;

}
public load_current_seg(width:number,height:number){
    this.current_seg = new SegStateData();
    this.current_seg.width = width;
    this.current_seg.height = height;
}

public getFontSize(){
    return this.fontSize;
}
public chars_width(chars="",fontSize =this.fontSize){
this.ctx.save();
//dont miss gap "px_"
let f = fontSize + "px " + this.fontName;
this.ctx.font = f;
let m = this.ctx.measureText(chars).width;
this.ctx.restore();
return Math.ceil(m);    
}
public drawText(content ="",x=0,y=0,fontSize= this.fontSize){
    this.ctx.save()
    this.ctx.strokeStyle = this.strokeStyle;
    this.ctx.fillStyle = this.fillStyle;

    let f = fontSize + "px " + this.fontName;
    this.ctx.font = f;
    this.ctx.fillText(content, x, y);
    this.ctx.restore();
}
public drawTextDelta(content ="",fontSize= this.fontSize,deltaX=0,deltaY=0){
    this.ctx.save()
    this.ctx.strokeStyle = this.strokeStyle;
    this.ctx.fillStyle = this.fillStyle;
    
    let f = fontSize + "px " + this.fontName;
    this.ctx.font = f;
    this.ctx.fillText(content, this.x + deltaX, this.y + deltaY);
    this.ctx.restore();
}
//==============Private
private setFontSize(n:number){
    this.fontSize = n;
    this.resetFont();
}
private setFontName(n:string){
    this.fontName = n;
    this.resetFont();
}
private restoreCtx(){
    this.ctx.restore();
}
private saveCtx(){
    this.ctx.save();
}
private resetFont(){
    this.ctx.font = this.fontSize + "px " + this.fontName;
}
private init_ctx(){
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.strokeStyle = this.strokeStyle;
}
//--deprecated-23-jan-2022
public addX(n:number){
    this.x = this.x + n;
}
private incX(n:number){
    this.x = this.x + n;
}
private decX(n:number){
    this.x = this.x - n;
}
//--depricated 23-jan-2022
private addY(n:number){
    this.y = this.y + n;
}
private incY(n:number){
    this.y = this.y + n;
}
private decY(n:number){
    this.y = this.y - n;
}
// canvas_width():number{
//     return this.canvas.width;
// }
// canvas_height():number{
//     return this.canvas.height;
// }

}
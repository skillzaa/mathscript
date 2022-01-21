
export default class State {
public x:number;
public y:number;
public ctx:CanvasRenderingContext2D;

private fontSize:number;
private fontName:string;
private canvas: HTMLCanvasElement;

constructor (canvas:HTMLCanvasElement,ctx:CanvasRenderingContext2D){
this.canvas = canvas;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
this.ctx = ctx;
this.x = 100;
this.y = 100;
this.fontSize = 50;
this.fontName = "serif";
//--need to be changed
this.resetFont();
}
getFontSize(){
    return this.fontSize;
}
chars_width(chars=""){
let m = this.ctx.measureText(chars);
return Math.ceil(m.width);    
}
setFontSize(n:number){
    this.fontSize = n;
    this.resetFont();
}
setFontName(n:string){
    this.fontName = n;
    this.resetFont();
}
restoreCtx(){
    this.ctx.restore();
}
saveCtx(){
    this.ctx.save();
}
resetFont(){
    this.ctx.font = this.fontSize + "px " + this.fontName;
}
getFont():string{
  return   this.ctx.font;
}

addX(n:number){
    this.x = this.x + n;
}
addY(n:number){
    this.y = this.y + n;
}
canvas_width():number{
    return this.canvas.width;
}
canvas_height():number{
    return this.canvas.height;
}
}
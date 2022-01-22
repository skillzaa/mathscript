
export default class State {
private x:number;
private y:number;
private ctx:CanvasRenderingContext2D;

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
//===================Public
public getFont():string{
  return   this.ctx.font;
}

public addX(n:number){
    this.x = this.x + n;
}
public addY(n:number){
    this.y = this.y + n;
}
public getFontSize(){
    return this.fontSize;
}
public chars_width(chars=""){
let m = this.ctx.measureText(chars);
return Math.ceil(m.width);    
}
public drawText(content =""){
    this.ctx.fillText(content, this.x, this.y);
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

canvas_width():number{
    return this.canvas.width;
}
canvas_height():number{
    return this.canvas.height;
}

}
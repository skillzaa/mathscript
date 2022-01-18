

export  default class State {
    x:number;
    y:number;
    fontSize:number;
    fontName:string;
    ctx:any;
    canvas:any;
constructor (canvas){
this.canvas = canvas;
this.ctx = canvas.getContext('2d');
this.x = 100;
this.y = 100;
this.fontSize = 50;
this.fontName = "serif";
this.fontColor = "#281be2"; 
//--need to be changed
this.ctx.fillStyle = this.fontColor; 
this.resetFont();
}
getFontSize(){
    return this.fontSize;
}
setFontSize(n){
    this.fontSize = n;
    this.resetFont();
}
setFontName(n){
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
getFont(){
  return   this.ctx.font;
}
}
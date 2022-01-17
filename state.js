

export  default class State {
constructor (canvas){
this.canvas = canvas;
this.ctx = canvas.getContext('2d');
this.x = 0;
this.y = 0;
this.fontSize = 50;
this.fontName = "serif";
}
getFontSize(n){
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
resetFont(){
    this.ctx.font = this.fontSize + "px " + this.fontName;
}
getFont(){
  return  this.ctx.font;
}
getFont(){
  return   this.ctx.font;
}
}
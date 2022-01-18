import State from "./state.js";

export default class Special {
    content:number; 
    state:State;   
constructor (state:State,content= 128103){
this.state = state;  
this.content = content;  
}
width(){
this.state.getFont();
let r = this.state.ctx.measureText(this.content);
return r.width;    
}


draw(){
    // strokeText("\u{1D120}", 10, 50);
    // let ccc = "{" + this.content + "}";
    // let ddd = "\\u" + ccc;
// this.state.ctx.fillText(ddd, this.state.x, this.state.y);
// let ff = "\u00A9"
//hexstring = "\\u" +"00A9";

// this.state.ctx.fillText(String.fromCodePoint(parseInt(this.content,16)),this.state.x, this.state.y);
// this.state.ctx.fillText(String.fromCodePoint(55358, 56614),this.state.x, this.state.y);
this.state.ctx.fillText(String.fromCodePoint(this.content),this.state.x, this.state.y);
// fromCharCode(55358, 56614)
// this.state.ctx.fillText(String.fromCodePoint(parseInt("2122", 16)),this.state.x, this.state.y);
// this.state.ctx.fillText(this.content, 
}

}
import State from "./state.js";
import sqrt from "./sqrt.js";
import Power from "./power.js";

export default class EqEnginge{
    eq:[]=[];
    state:State;
constructor (canvas:any,eq:[]=[]){
this.eq = eq;  
// this.canvas = canvas;
this.state = new State(canvas);
this.state.x = 200;
this.state.y = 200;
this.state.ctx = canvas.getContext('2d');
// this.x = 100;
// this.y = 100;
// this.fontSize = 50;
// this.fontName = "serif";
// this.fontColor = "#281be2"; 
// this.strokeStyle = "#281be2"; 
//--need to be changed
// this.state.ctx.fillStyle = this.fontColor; 
// this.state.ctx.strokeStyle = this.strokeStyle; 
// this.resetFont();
this.calculate();
this.draw();
} 
calculate(){
    for (let i = 0; i < this.eq.length; i++) {
        this.eq[i].width = this.state.chars_width(this.eq[i].content);
        console.log(this.eq[i].content,this.eq[i].width);   
    }  
}  
draw(){
    
for (let i = 0; i < this.eq.length; i++) {

    switch (this.eq[i].type) {
        case "normal":
            this.state.ctx.fillText(this.eq[i].content,this.state.x,this.state.y);  
            this.state.x = this.state.x + this.eq[i].width;
            break;
        
        case "ss":
        this.state.ctx.save();
        this.state.ctx.font = '25px serif';
        this.state.ctx.fillText(this.eq[i].content,this.state.x,this.state.y);  
        this.state.ctx.restore();
        this.state.x = this.state.x + this.eq[i].width;
        break;

        case "sqrt":
               sqrt(this.state,this.eq[i]);
            //    this.state.x = this.state.x + this.eq[i].width;
               this.state.x = this.state.x + this.eq[i].width;
        break;

        case "power":
               let p = new Power(this.state,         this.eq[i].content,this.eq[i].power);
               p.draw();
               this.state.x = this.state.x + p.width();
        break;

        case "icon":
        this.state.ctx.save();
        this.state.ctx.font = '50px serif';  
        this.state.ctx.fillText(String.fromCodePoint(this.eq[i].icon),this.state.x,this.state.y);
        this.state.ctx.restore();
        this.state.x = this.state.x + 30;
        break;
    
        default:
        console.log("unknown type", this.eq[i].type);
        break;
    }
   
   
    // console.log(this.eq[i]);   
}
}

 


}//ends
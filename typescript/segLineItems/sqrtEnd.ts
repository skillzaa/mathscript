import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";


export default class SqrtEnd implements ISegment {
constructor (){

}

draw(state:State,local_x:number):number{
    // state.ctx.font = '50px serif';  
    state.ctx.fillText(String.fromCodePoint(8730),local_x,state.y);

    let sqrt_width = state.ctx.measureText(String.fromCodePoint(8730)).width;
    let content_width = state.ctx.measureText(this.content).width;

    state.ctx.fillText(this.content ,local_x + sqrt_width ,state.y);
    //---------------
    state.ctx.strokeStyle = "red";
    state.ctx.beginPath();
    // let lineX = state.x + data.width;
    let lineX = local_x + sqrt_width ;
    state.ctx.moveTo(lineX , state.y);
    state.ctx.lineTo(lineX + content_width , state.y);
    state.ctx.stroke();
    // state.ctx.restore();

 return 200;   
}
}//sqrt    


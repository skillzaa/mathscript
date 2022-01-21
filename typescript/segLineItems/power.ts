import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";

import {power_data} from "../app_data/power_data.js";

export default class Power implements ISegment {
private content:string;
private power:string;
public moveup:number;
    
constructor (content:string="x",power:string="2"){
this.content = content;
this.power = power;
this.moveup = 5;
}


draw(state:State,local_x:number):number{
// state.ctx.save();

const start_font_size =  state.getFontSize();
state.ctx.fillText(this.content, local_x, state.y);

let content_width = state.ctx.measureText(this.content).width;

state.setFontSize(start_font_size/2);
state.ctx.fillText(this.power, local_x + content_width , state.y - this.moveup);
//--measure power first then reset
let power_measur = state.ctx.measureText(this.power);
//--now reset
state.setFontSize(start_font_size);
//------------------------------

return Math.ceil(power_measur.width + content_width);    
}

}
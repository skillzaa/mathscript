import LatMachine from "../latMachine/latMachine.js";
import Power from "../segLineItems/power.js";
import {power_data} from "../app_data/power_data.js";
import Normal from "../segLineItems/normal.js";
import Sqrt from "../segLineItems/sqrt.js";
import Special from "../segLineItems/special.js";
import State from "../state.js";

export default class SegLine extends LatMachine{
private sqrt_open:boolean;
private sqrt_startX:number;
private sqrt_startY:number;
constructor(){
super();
this.sqrt_open = false;
this.sqrt_startX = 0;
this.sqrt_startY = 0;
}
// draw(state:State,starting_x:number=0):number{   

// return super.draw(state,starting_x);
// }






//=================================
//=================================
//=================================
//=================================
//=================================
insert_power(data:power_data){
let nn = this.add_segment(new Power(data));
return nn;
}

insert_normal(str:string){
    let n = new Normal(str);
    let nn = this.add_segment(n);
    return nn;
}
insert_sqrt(str:string){
    let n = new Sqrt(str);
    let nn = this.add_segment(n);
    return nn;
}
insert_special(n:number=128103){
    let special = new Special(n);
    return this.add_segment(special);
}

}
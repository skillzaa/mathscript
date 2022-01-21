import LatMachine from "../latMachine/latMachine.js";
import Power from "../segLineItems/power.js"
import {power_data} from "../app_data/power_data.js";
import Normal from "../segLineItems/normal.js"

export default class SegLine extends LatMachine{

insert_power(data:power_data){
let nn = this.add_segment(new Power(data));
return nn;
}

insert_normal(str:string){
    let n = new Normal(str);
    let nn = this.add_segment(n);
    return nn;
}

}
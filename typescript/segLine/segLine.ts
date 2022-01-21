import LatMachine from "../latMachine/latMachine.js";
import Power from "../segLineItems/power.js";
import {power_data} from "../app_data/power_data.js";
import Normal from "../segLineItems/normal.js";
import Sqrt from "../segLineItems/sqrt.js";
import Special from "../segLineItems/special.js";
import State from "../state.js";

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
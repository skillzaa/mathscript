import LatMachine from "../latMachine/latMachine.js";
import Power from "../segLineItems/power.js"
import Normal from "../segLineItems/normal.js"

export default class SegLine extends LatMachine{


// insert_power(data={}){
//     let p = new Power(this.state,data);
//     this.eq.push(p);
// }
insert_normal(str:string){
    let n = new Normal(str);
    let nn = this.add_segment(n);
    return nn;
}

}
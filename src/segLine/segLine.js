import LatMachine from "../latMachine/latMachine.js";
import Power from "../segLineItems/power.js";
import Normal from "../segLineItems/normal.js";
import Sqrt from "../segLineItems/sqrt.js";
export default class SegLine extends LatMachine {
    insert_power(data) {
        let nn = this.add_segment(new Power(data));
        return nn;
    }
    insert_normal(str) {
        let n = new Normal(str);
        let nn = this.add_segment(n);
        return nn;
    }
    insert_sqrt(str) {
        let n = new Sqrt(str);
        let nn = this.add_segment(n);
        return nn;
    }
}

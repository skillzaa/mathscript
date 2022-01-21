import LatMachine from "../latMachine/latMachine.js";
import Power from "../segLineItems/power.js";
import Normal from "../segLineItems/normal.js";
import Sqrt from "../segLineItems/sqrt.js";
import Special from "../segLineItems/special.js";
import SqrtEnd from "../segLineItems/sqrtEnd.js";
import LocalState from "./localState.js";
export default class SegLine extends LatMachine {
    constructor() {
        super();
        this.local_state = new LocalState();
    }
    insert_power(content, power) {
        let pwr = new Power(content, power);
        let nn = this.add_segment(pwr);
        return nn;
    }
    insert_normal(str) {
        let n = new Normal(str);
        let nn = this.add_segment(n);
        return nn;
    }
    insert_sqrtend() {
        let n = new SqrtEnd();
        let nn = this.add_segment(n);
        return nn;
    }
    insert_sqrt() {
        let n = new Sqrt();
        let nn = this.add_segment(n);
        return nn;
    }
    insert_special(n = 128103) {
        let special = new Special(n);
        return this.add_segment(special);
    }
}

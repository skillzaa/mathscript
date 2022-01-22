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
    power(content, power) {
        let pwr = new Power(content, power);
        let nn = this.add_segment(pwr);
        return nn;
    }
    normal(str) {
        let n = new Normal(str);
        let nn = this.add_segment(n);
        return nn;
    }
    sqrtend() {
        let n = new SqrtEnd();
        let nn = this.add_segment(n);
        return nn;
    }
    sqrt() {
        let n = new Sqrt();
        let nn = this.add_segment(n);
        return nn;
    }
    special(n = 128103) {
        let special = new Special(n);
        return this.add_segment(special);
    }
}

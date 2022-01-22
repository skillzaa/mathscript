import LatMachine from "../latMachine/latMachine.js";
import Power from "../segLineItems/power.js";
import Normal from "../segLineItems/normal.js";
import Sqrt from "../segLineItems/sqrt.js";
import Special from "../segLineItems/special.js";
import SqrtEnd from "../segLineItems/sqrtEnd.js";
import LocalState from "./localState.js";
import LineTop from "../segLineItems/lineTop.js";
import LineTopEnd from "../segLineItems/lineTopEnd.js";
export default class SegLine extends LatMachine {
    constructor() {
        super();
        this.local_state = new LocalState();
    }
    lineTopEnd() {
        return this.add_segment(new LineTopEnd());
    }
    lineTop() {
        return this.add_segment(new LineTop());
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

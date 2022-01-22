import LatMachine from "../latMachine/latMachine.js";
import Power from "../segLineItems/power.js";
import Normal from "../segLineItems/normal.js";
import Sqrt from "../segLineItems/sqrt.js";
import Special from "../segLineItems/special.js";
import SqrtEnd from "../segLineItems/sqrtEnd.js";
import LocalState from "./localState.js";
import LineTop from "../segLineItems/lineTop.js";
import LineTopEnd from "../segLineItems/lineTopEnd.js";
import LineBot from "../segLineItems/lineBot.js";
import LineBotEnd from "../segLineItems/lineBotEnd.js";
export default class SegLine extends LatMachine {
    constructor(state) {
        super(state);
        this.local_state = new LocalState();
    }
    lineBotEnd() {
        return this.add_segment(new LineBotEnd(this.state));
    }
    lineBot() {
        return this.add_segment(new LineBot(this.state));
    }
    lineTopEnd() {
        return this.add_segment(new LineTopEnd(this.state));
    }
    lineTop() {
        return this.add_segment(new LineTop(this.state));
    }
    power(content, power) {
        let pwr = new Power(this.state, content, power);
        let nn = this.add_segment(pwr);
        return nn;
    }
    normal(str) {
        let n = new Normal(this.state, str);
        let nn = this.add_segment(n);
        return nn;
    }
    sqrtend() {
        let n = new SqrtEnd(this.state);
        let nn = this.add_segment(n);
        return nn;
    }
    sqrt() {
        let n = new Sqrt(this.state);
        let nn = this.add_segment(n);
        return nn;
    }
    special(n = 128103) {
        let special = new Special(this.state, n);
        return this.add_segment(special);
    }
}

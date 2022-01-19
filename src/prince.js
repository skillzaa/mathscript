import State from "./state.js";
import Power from "./eqEngine/power.js";
import Normal from "./normal.js";
import Special from "./special.js";
export default class Prince {
    constructor(canvas, eq = {}) {
        this.state = new State(canvas);
        this.eq = eq;
    }
    draw() {
        for (let i = 0; i < this.eq.length; i++) {
            switch (this.eq[i].mode) {
                case "p":
                    let p = new Power(this.state, this.eq[i].content, this.eq[i].power);
                    p.draw();
                    this.state.x = this.state.x + p.width();
                    console.log("power");
                    break;
                case "o":
                    let n = new Normal(this.state, this.eq[i].content);
                    n.draw();
                    this.state.x = this.state.x + n.width();
                    console.log("operator");
                    break;
                case "special":
                    let s = new Special(this.state, this.eq[i].content);
                    s.draw();
                    this.state.x = this.state.x + s.width();
                    console.log("special");
                    break;
                default:
                    console.log("unknown operator");
                    break;
            }
            //   console.log("fine", this.eq[i]);
        }
    }
}

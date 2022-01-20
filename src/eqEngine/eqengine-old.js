import State from "../state.js";
export default class EqEnginge {
    constructor(canvas) {
        this.segments = [];
        this.segments = [];
        this.state = new State(canvas);
    }
    draw() {
        for (let i = 0; i < this.segments.length; i++) {
            let result = this.segments[i].draw({});
            // The segments will increase state.x
            // this.state.x = this.state.x + result.x;
        }
        console.log("equation drawn");
    }
    add_segment(segment) {
        // let s = new Segment(this.state);
        this.segments.push(segment);
        return segment;
    }
} //ends

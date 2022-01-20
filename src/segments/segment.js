// import ISegmentData from "./ISegmentData.js";
export default class Segment {
    constructor(state) {
        this.state = state;
        this.localX = this.state.x;
        this.localY = this.state.y;
        this.eq = [];
    }
    draw(arg = {}) {
        for (let i = 0; i < this.eq.length; i++) {
            let r = this.eq[i].draw({});
        }
        return { x: 66, y: 54 };
    } //draw fn
}

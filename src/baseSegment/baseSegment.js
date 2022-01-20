import DrawResult from "./drawResult.js";
/*
Base Segment implements ISegment as well as iterate over an array of ISegments. This is easy to understand if we thing in terms of behaviour and not data. Since it is a segment as well as an iterator over an array of segments this in draw it has to evaluate every item.day result and final send its own result.
*/
export default class Segment {
    constructor(state) {
        this.state = state;
        this.localX = this.state.x;
        this.localY = this.state.y;
        this.eq = [];
    }
    draw(arg = {}) {
        let final_r = new DrawResult();
        for (let i = 0; i < this.eq.length; i++) {
            let r = this.eq[i].draw({});
        }
        return final_r;
    } //draw fn
}

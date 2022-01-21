export default class LatMachine {
    constructor() {
        this.segments = [];
        this.segments = [];
        this.segment_gap = 5;
    }
    //--function arguments shd be arguments and not classes unless required absoliutely.
    draw(state) {
        let local_x = state.x;
        for (let i = 0; i < this.segments.length; i++) {
            let delta_x = this.segments[i].draw(state, local_x);
            local_x += delta_x + this.segment_gap;
        }
        return local_x;
    }
    //--so a lat machine can always get segments from outside as long as they complyby ISegment interface
    add_segment(segment) {
        this.segments.push(segment);
        return segment;
    }
} //ends

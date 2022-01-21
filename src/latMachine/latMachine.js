// import LocalData from "./local_data.js";
export default class LatMachine {
    constructor() {
        this.segments = [];
        this.segments = [];
        this.segment_gap = 2;
        this.local_state = {};
    }
    //--function arguments shd be concrete data types and not classes / objects unless required absoliutely.
    draw(state, starting_x = 0, local_data = {}) {
        let local_x = starting_x;
        for (let i = 0; i < this.segments.length; i++) {
            //-----save state ctx here
            state.ctx.save();
            let delta_x = this.segments[i].draw(state, local_x, this.local_state);
            //-----restore state ctx here
            state.ctx.restore();
            //--there may be control segments which may not move the x in that case dont add gap
            if (delta_x > 0) {
                local_x += delta_x + this.segment_gap;
            }
        }
        return local_x;
    }
    //--so a lat machine can always get segments from outside as long as they complyby ISegment interface
    add_segment(segment) {
        this.segments.push(segment);
        return segment;
    }
} //ends

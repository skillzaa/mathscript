// import LocalData from "./local_data.js";
export default class LatMachine {
    constructor() {
        this.segments = [];
        this.segments = [];
        this.segment_gap = 2;
        this.lat_width = 0;
        this.lat_height = 0;
        this.local_state = {};
    }
    width() {
        return this.lat_width;
    }
    height() {
        return this.lat_height;
    }
    //--function arguments shd be concrete data types and not classes / objects unless required absoliutely.
    draw(state, starting_x = 0, local_data = {}) {
        let local_x = starting_x;
        for (let i = 0; i < this.segments.length; i++) {
            //-----save state ctx here
            state.resetFont();
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
        this.lat_width += segment.width();
        if (segment.height() > this.lat_height) {
            this.lat_height = segment.height();
        }
        this.segments.push(segment);
        return segment;
    }
} //ends

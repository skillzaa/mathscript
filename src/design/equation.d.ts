import ISegment from "./Isegment.js";
import State from "./state.js";
export default class Equation {
    segment_gap: number;
    private state;
    private segments;
    private lat_width;
    private lat_height;
    constructor(state: State);
    draw(): boolean;
    width(): number;
    height(): number;
    add_segment(segment: ISegment): ISegment;
}
//# sourceMappingURL=equation.d.ts.map
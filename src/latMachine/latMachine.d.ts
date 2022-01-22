import ISegment from "./Isegment.js";
import State from "../state.js";
export default class LatMachine {
    protected segments: ISegment[];
    segment_gap: number;
    protected state: State;
    protected local_state: {};
    private lat_width;
    private lat_height;
    constructor(state: State);
    draw(): boolean;
    width(): number;
    height(): number;
    add_segment(segment: ISegment): ISegment;
}
//# sourceMappingURL=latMachine.d.ts.map
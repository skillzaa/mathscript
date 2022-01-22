import ISegment from "./Isegment.js";
import State from "../state.js";
export default class LatMachine implements ISegment {
    private segments;
    private lat_width;
    private lat_height;
    segment_gap: number;
    protected local_state: {};
    constructor();
    width(): number;
    height(): number;
    draw(state: State, starting_x?: number, local_data?: {}): number;
    add_segment(segment: ISegment): ISegment;
}
//# sourceMappingURL=latMachine.d.ts.map
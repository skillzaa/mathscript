import ISegment from "./Isegment.js";
import State from "../state.js";
export default class LatMachine implements ISegment {
    private segments;
    segment_gap: number;
    constructor();
    draw(state: State, starting_x?: number): number;
    add_segment(segment: ISegment): ISegment;
}
//# sourceMappingURL=latMachine.d.ts.map
import State from "./state.js";
import LineSeg from "../lineSeg/lineSeg.js";
import Frac from "../frac/frac.js";
import ISegment from "./Isegment.js";
export default class SegFactory {
    private state;
    private add_new_seg_fn;
    constructor(state: State, add_new_seg_fn: (segment: ISegment) => ISegment);
    lineSeg(): LineSeg;
    frac(): Frac;
}
//# sourceMappingURL=segFactory.d.ts.map
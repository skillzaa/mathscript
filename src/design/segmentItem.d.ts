import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
export default class SegItemAbs implements ISegment {
    state: State;
    constructor(state: State);
    width(): number;
    height(): number;
    draw(state: State): boolean;
}
//# sourceMappingURL=segmentItem.d.ts.map
import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";
export default class SegItemAbs implements ISegment {
    state: State;
    constructor(state: State);
    width(): number;
    height(): number;
    draw(state: State, local_state: LocalState): boolean;
}
//# sourceMappingURL=SegmentItem.d.ts.map
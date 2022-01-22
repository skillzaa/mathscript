import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";
import SegItemAbs from "./SegItemAbs.js";
export default class LineTopEnd extends SegItemAbs implements ISegment {
    constructor(state: State);
    width(): number;
    height(): number;
    draw(state: State, local_state: LocalState): boolean;
}
//# sourceMappingURL=lineTopEnd.d.ts.map
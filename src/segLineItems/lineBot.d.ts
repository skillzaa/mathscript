import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";
import SegItemAbs from "./SegItemAbs.js";
export default class LineBot extends SegItemAbs implements ISegment {
    constructor(state: State);
    draw(state: State, local_state: LocalState): boolean;
}
//# sourceMappingURL=lineBot.d.ts.map
import ISegment from "../latMachine/Isegment.js";
import LocalState from "../segLine/localState.js";
import State from "../state.js";
import SegItemAbs from "./SegItemAbs.js";
export default class Special extends SegItemAbs implements ISegment {
    content: number;
    constructor(state: State, content?: number);
    draw(state: State, local_state: LocalState): boolean;
}
//# sourceMappingURL=special.d.ts.map
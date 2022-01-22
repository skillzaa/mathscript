import ISegment from "../typescript/latMachine/Isegment.js";
import LocalState from "../typescript/segLine/localState.js";
import State from "../state.js";
import SegItemAbs from "./SegItemAbs.js";
export default class Special extends SegItemAbs implements ISegment {
    content: number;
    constructor(state: State, content?: number);
    draw(state: State, local_state: LocalState): boolean;
}
//# sourceMappingURL=special.d.ts.map
import ISegment from "../typescript/latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../typescript/segLine/localState.js";
import SegItemAbs from "./SegItemAbs.js";
export default class Sqrt extends SegItemAbs implements ISegment {
    constructor(state: State);
    width(): number;
    height(): number;
    draw(state: State, local_state: LocalState): boolean;
}
//# sourceMappingURL=sqrt.d.ts.map
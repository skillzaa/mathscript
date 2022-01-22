import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import SegItemAbs from "./SegItemAbs.js";
import LocalState from "../segLine/localState.js";
export default class Power extends SegItemAbs implements ISegment {
    private content;
    private power;
    moveup: number;
    constructor(state: State, content?: string, power?: string);
    width(): number;
    draw(state: State, local_state: LocalState): boolean;
}
//# sourceMappingURL=power.d.ts.map
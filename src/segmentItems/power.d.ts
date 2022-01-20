import State from "../state.js";
import DrawResult from "./drawResult.js";
import SegmentItemAbs from "./segmentItem.js";
export default class SuperScript extends SegmentItemAbs {
    private content;
    private power;
    moveup: number;
    constructor(state: State, data?: {});
    width(): number;
    height(): number;
    draw(arg?: {}): DrawResult;
}
//# sourceMappingURL=power.d.ts.map
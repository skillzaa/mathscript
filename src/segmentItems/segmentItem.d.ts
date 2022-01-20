import State from "../state.js";
import DrawResult from "./drawResult.js";
export default class SegmentItemAbs {
    protected state: State;
    protected data: object;
    protected localX: number;
    protected ctx: any;
    constructor(state: State);
    width(): number;
    height(): number;
    draw(arg?: {}): DrawResult;
}
//# sourceMappingURL=segmentItem.d.ts.map
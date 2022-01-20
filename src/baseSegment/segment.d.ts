import State from "../state.js";
import ISegment from "./Isegment.js";
import DrawResult from "./drawResult.js";
export default class Segment implements ISegment {
    private state;
    private eq;
    private localX;
    private localY;
    constructor(state: State);
    draw(arg?: {}): DrawResult;
}
//# sourceMappingURL=segment.d.ts.map
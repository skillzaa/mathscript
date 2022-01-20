import State from "../state.js";
import ISegment from "../eqEngine/Isegment.js";
import DrawResult from "./drawResult.js";
export default class Segment implements ISegment {
    private state;
    private eq;
    private localX;
    constructor(state: State);
    width(): number;
    draw(arg?: {}): DrawResult;
}
//# sourceMappingURL=segment-old.d.ts.map
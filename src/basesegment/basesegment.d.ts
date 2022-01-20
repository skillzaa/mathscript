import State from "../state.js";
import ISegment from "./Isegment.js";
import IDrawResult from "./IDrawResult.js";
export default class Segment implements ISegment {
    private state;
    private eq;
    private localX;
    private localY;
    constructor(state: State);
    draw(arg?: {}): IDrawResult;
}
//# sourceMappingURL=basesegment.d.ts.map
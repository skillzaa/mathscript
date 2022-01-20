import State from "../state.js";
import ISegment from "../eqEngine/Isegment.js";
import IDrawResult from "../eqEngine/IDrawResult.js";
export default class Segment implements ISegment {
    private state;
    private eq;
    private localX;
    private localY;
    constructor(state: State);
    draw(arg?: {}): IDrawResult;
}
//# sourceMappingURL=segment.d.ts.map
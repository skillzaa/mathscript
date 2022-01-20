import State from "../state.js";
import ISegment from "./Isegment.js";
import DrawResult from "./drawResult.js";
export default class Segment implements ISegment {
    private state;
    private eq;
    private localX;
    constructor(state: State);
    width(): number;
    draw(arg?: {}): DrawResult;
    insert_power(data?: {}): void;
    insert_normal(data?: {}): void;
}
//# sourceMappingURL=segment.d.ts.map
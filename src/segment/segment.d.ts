import State from "../state.js";
import ISegment from "./Isegment.js";
import DrawResult from "./drawResult.js";
export default class Segment implements ISegment {
    private state;
    private eq;
    private localX;
    constructor(state: State);
    draw(arg?: {}): DrawResult;
    insert_power(data?: {
        content: string;
        power: string;
    }): void;
}
//# sourceMappingURL=segment.d.ts.map
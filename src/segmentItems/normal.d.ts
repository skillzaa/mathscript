import State from "../state.js";
import ISegment from "../segment/Isegment.js";
export default class Normal implements ISegment {
    content: string;
    state: State;
    constructor(state: State, data?: {});
    width(): number;
    draw(args?: {}): void;
}
//# sourceMappingURL=normal.d.ts.map
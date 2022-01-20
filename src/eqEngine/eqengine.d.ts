import State from "../state.js";
import ISegment from "../segment/Isegment.js";
import Segment from "../segment/segment.js";
export default class EqEnginge {
    eq: [ISegment] | [];
    state: State;
    constructor(canvas: any);
    draw(): void;
    insert(): Segment;
}
//# sourceMappingURL=eqengine.d.ts.map
import Segment from "../segment/segment.js";
import State from "../state.js";
export default class Power extends Segment {
    private content;
    private power;
    moveup: number;
    constructor(state: State, content?: string, power?: string);
    width(): number;
    height(): number;
    draw(): void;
}
//# sourceMappingURL=power.d.ts.map
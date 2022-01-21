import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
export default class Power implements ISegment {
    private content;
    private power;
    moveup: number;
    constructor(content?: string, power?: string);
    draw(state: State, local_x: number): number;
}
//# sourceMappingURL=power.d.ts.map
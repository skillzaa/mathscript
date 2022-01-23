import State from "../design/state.js";
import LineSeg from "../lineSeg/lineSeg.js";
import ISegment from "../design/Isegment.js";
export default class Frac implements ISegment {
    private state;
    top: LineSeg;
    bot: LineSeg;
    divider_gap: number;
    constructor(state: State);
    draw(): boolean;
    width(): number;
    height(): number;
}
//# sourceMappingURL=frac.d.ts.map
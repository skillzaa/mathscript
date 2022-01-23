import State from "../design/state.js";
import LineSeg from "../lineSeg/lineSeg.js";
import ISegment from "../design/Isegment.js";
export default class Frac implements ISegment {
    private state;
    private top;
    private bot;
    constructor(state: State, top: LineSeg, bot: LineSeg);
    draw(): boolean;
    width(): number;
    height(): number;
}
//# sourceMappingURL=frac.d.ts.map
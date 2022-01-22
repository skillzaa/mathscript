import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import SegLine from "../segLine/segLine.js";
export default class Fraction implements ISegment {
    private upper;
    private lower;
    divider: boolean;
    constructor(upper: SegLine, lower: SegLine);
    width(): number;
    height(): number;
    draw(state: State, starting_x: number): number;
}
//# sourceMappingURL=fraction.d.ts.map
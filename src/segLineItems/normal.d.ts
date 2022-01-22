import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
export default class Normal implements ISegment {
    content: string;
    constructor(content: string);
    width(): number;
    height(): number;
    draw(state: State, starting_x: number): number;
}
//# sourceMappingURL=normal.d.ts.map
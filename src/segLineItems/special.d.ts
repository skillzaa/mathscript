import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
export default class Special implements ISegment {
    content: number;
    constructor(content?: number);
    width(): number;
    height(): number;
    draw(state: State, local_x: number): number;
}
//# sourceMappingURL=special.d.ts.map
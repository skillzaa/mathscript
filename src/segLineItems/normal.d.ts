import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
export default class Normal implements ISegment {
    content: string;
    constructor(content: string);
    width(): number;
    draw(state: State, ctx: CanvasRenderingContext2D, local_x: number): number;
}
//# sourceMappingURL=normal.d.ts.map
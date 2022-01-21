import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
export default class Sqrt implements ISegment {
    content: string;
    add_to_top_line: number;
    constructor(content?: string);
    draw(state: State, local_x: number): number;
}
//# sourceMappingURL=sqrt-old.d.ts.map
import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
export default class Sqrt implements ISegment {
    content: string;
    constructor(content?: string);
    draw(state: State, local_x: number): number;
}
//# sourceMappingURL=sqrt.d.ts.map
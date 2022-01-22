import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import SegItemAbs from "./SegItemAbs.js";
export default class Normal extends SegItemAbs implements ISegment {
    content: string;
    constructor(state: State, content: string);
    width(): number;
    height(): number;
    draw(state: State, local_state: any): boolean;
}
//# sourceMappingURL=normal.d.ts.map
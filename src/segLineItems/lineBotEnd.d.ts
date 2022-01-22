import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import LocalState from "../segLine/localState.js";
export default class LineBotEnd implements ISegment {
    constructor();
    width(): number;
    height(): number;
    draw(state: State, local_x: number, local_state: LocalState): number;
}
//# sourceMappingURL=lineBotEnd.d.ts.map
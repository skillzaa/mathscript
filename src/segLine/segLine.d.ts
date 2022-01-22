import LatMachine from "../latMachine/latMachine.js";
import State from "../state.js";
import LocalState from "./localState.js";
export default class SegLine extends LatMachine {
    protected local_state: LocalState;
    constructor(state: State);
    lineBotEnd(): import("../latMachine/Isegment.js").default;
    lineBot(): import("../latMachine/Isegment.js").default;
    lineTopEnd(): import("../latMachine/Isegment.js").default;
    lineTop(): import("../latMachine/Isegment.js").default;
    power(content: string, power: string): import("../latMachine/Isegment.js").default;
    normal(str: string): import("../latMachine/Isegment.js").default;
    sqrtend(): import("../latMachine/Isegment.js").default;
    sqrt(): import("../latMachine/Isegment.js").default;
    special(n?: number): import("../latMachine/Isegment.js").default;
}
//# sourceMappingURL=segLine.d.ts.map
import DrawState from "./drawState.js";
import DrawInstr from "./drawInstr.js";
export default class DrawEngine {
    state: DrawState;
    instr: DrawInstr[];
    constructor(instr: DrawInstr[]);
    run(): void;
}
//# sourceMappingURL=drawEngine.d.ts.map
import ITrigger from "./interpreter/ITrigger.js";
export default class Command implements ITrigger {
    lookfor: string;
    constructor();
    callback(code: string, current_index: number): boolean;
}
//# sourceMappingURL=command.d.ts.map
import ITrigger from "./ITrigger.js";
export default class Interpreter {
    code: string;
    triggers: ITrigger[];
    normalState: boolean;
    constructor(code?: string);
    run(): void;
}
//# sourceMappingURL=interpreter.d.ts.map
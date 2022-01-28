import Item from "./item.js";
export default class Interpreter {
    readonly script: string;
    raw: Item[];
    constructor(script: string);
    processSuperScript(): void;
    processSqrt(): void;
}
//# sourceMappingURL=interpreter.d.ts.map
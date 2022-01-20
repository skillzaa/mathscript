import State from "../state.js";
export default class Power {
    state: State;
    private content;
    private power;
    moveup: number;
    constructor(state: State, content?: string, power?: string);
    width(): number;
    height(): number;
    draw(): void;
}
//# sourceMappingURL=power.d.ts.map
import State from "../design/state.js";
import IDrawable from "../design/IDrawable.js";
export default class Sqrt implements IDrawable {
    state: State;
    constructor(state: State);
    width(): number;
    height(): number;
    draw(): boolean;
}
//# sourceMappingURL=sqrt.d.ts.map
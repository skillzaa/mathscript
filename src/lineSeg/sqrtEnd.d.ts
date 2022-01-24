import State from "../design/state.js";
import IDrawable from "../design/IDrawable.js";
export default class SqrtEnd implements IDrawable {
    state: State;
    constructor(state: State);
    width(): number;
    height(): number;
    draw(x: number, y: number): boolean;
}
//# sourceMappingURL=sqrtEnd.d.ts.map
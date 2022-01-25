import IDrawable from "../framework/IDrawable.js";
import State from "../framework/state.js";
export default class Plugin implements IDrawable {
    constructor();
    width(): number;
    height(): number;
    draw(state: State, x: number, y: number): boolean;
}
//# sourceMappingURL=plugin.d.ts.map
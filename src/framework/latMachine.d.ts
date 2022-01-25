import State from "./state.js";
import IDrawable from "./IDrawable.js";
export default class Framework {
    private items;
    gap: number;
    constructor();
    draw(state: State, x?: number, y?: number): boolean;
    add_item(item: IDrawable): IDrawable;
}
//# sourceMappingURL=latMachine.d.ts.map
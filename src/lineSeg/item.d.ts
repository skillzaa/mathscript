import IDrawable from "../design/IDrawable.js";
import State from "../design/state.js";
export default class Item implements IDrawable {
    content: string;
    state: State;
    constructor(state: State, content?: string);
    width(): number;
    height(): number;
    draw(): boolean;
}
//# sourceMappingURL=item.d.ts.map
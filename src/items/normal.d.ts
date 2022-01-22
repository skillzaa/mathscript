import Item from "../design/item.js";
import State from "../design/state.js";
export default class Normal extends Item {
    content: string;
    constructor(state: State, content?: string);
    width(): number;
    height(): number;
    draw(): boolean;
}
//# sourceMappingURL=normal.d.ts.map
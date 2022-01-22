import Iitem from "./Iitem.js";
import State from "./state.js";
export default class Item implements Iitem {
    content: string;
    state: State;
    constructor(state: State, content?: string);
    width(): number;
    height(): number;
    draw(): boolean;
}
//# sourceMappingURL=item.d.ts.map
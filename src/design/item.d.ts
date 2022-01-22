import Iitem from "./Iitem.js";
import State from "./state.js";
export default class Item implements Iitem {
    state: State;
    constructor(state: State);
    width(): number;
    height(): number;
    draw(state: State): boolean;
}
//# sourceMappingURL=item.d.ts.map
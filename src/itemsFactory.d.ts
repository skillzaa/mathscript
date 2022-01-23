import State from "./design/state.js";
import Item from "./design/item.js";
import Power from "./items/power.js";
export default class ItemsFactory {
    private state;
    constructor(state: State);
    item(): Item;
    power(): Power;
}
//# sourceMappingURL=itemsFactory.d.ts.map
import Item from "./design/item.js";
import Power from "./items/power.js";
//--Just provide the item with default settings
export default class ItemsFactory {
    constructor(state) {
        this.state = state;
    }
    item() {
        let i = new Item(this.state);
        return i;
    }
    power() {
        let i = new Power(this.state);
        return i;
    }
}

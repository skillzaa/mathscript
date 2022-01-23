import State from "../design/state.js";
import Item from "./item.js";
import Power from "./power.js";
import Normal from "./normal.js";
import LineTop from "./lineTop.js";
import LineTopEnd from "./lineTopEnd.js";
import LineBot from "./lineBot.js";
import LineBotEnd from "./lineBotEnd.js";
import Iitem from "./Iitem.js";
export default class ItemsFactory {
    private state;
    private add_new_item_fn;
    constructor(state: State, add_new_item_fn: (item: Iitem) => Iitem);
    item(content?: string): Item;
    power(content?: string, power?: string): Power;
    normal(content?: string): Normal;
    linetop(): LineTop;
    linetopEnd(): LineTopEnd;
    lineBot(): LineBot;
    lineBotEnd(): LineBotEnd;
}
//# sourceMappingURL=itemsFactory.d.ts.map
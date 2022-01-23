import State from "./state.js";
import Item from "./item.js";
import Power from "../items/power.js";
import Normal from "../items/normal.js";
import LineTop from "../items/lineTop.js";
import LineTopEnd from "../items/lineTopEnd.js";
import LineBot from "../items/lineBot.js";
import LineBotEnd from "../items/lineBotEnd.js";
export default class ItemsFactory {
    private state;
    constructor(state: State);
    item(content?: string): Item;
    power(content?: string, power?: string): Power;
    normal(content?: string): Normal;
    linetop(): LineTop;
    linetopEnd(): LineTopEnd;
    lineBot(): LineBot;
    lineBotEnd(): LineBotEnd;
}
//# sourceMappingURL=itemsFactory.d.ts.map
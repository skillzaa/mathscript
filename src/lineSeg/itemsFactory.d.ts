import State from "../design/state.js";
import Power from "./power.js";
import Normal from "./normal.js";
import LineTop from "./lineTop.js";
import LineTopEnd from "./lineTopEnd.js";
import LineBot from "./lineBot.js";
import LineBotEnd from "./lineBotEnd.js";
import Sqrt from "./sqrt.js";
import SqrtEnd from "./sqrtEnd.js";
import IDrawable from "../design/IDrawable.js";
export default class ItemsFactory {
    private state;
    private add_new_item_fn;
    constructor(state: State, add_new_item_fn: (item: IDrawable) => IDrawable);
    power(content?: string, power?: string): Power;
    normal(content?: string): Normal;
    linetop(): LineTop;
    lineTopEnd(): LineTopEnd;
    lineBot(): LineBot;
    lineBotEnd(): LineBotEnd;
    sqrt(): Sqrt;
    sqrtEnd(): SqrtEnd;
}
//# sourceMappingURL=itemsFactory.d.ts.map
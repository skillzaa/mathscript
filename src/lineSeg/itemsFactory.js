import Item from "../design/item.js";
import Power from "../items/power.js";
import Normal from "../items/normal.js";
import LineTop from "../items/lineTop.js";
import LineTopEnd from "../items/lineTopEnd.js";
import LineBot from "../items/lineBot.js";
import LineBotEnd from "../items/lineBotEnd.js";
//--Just provide the item with default settings
export default class ItemsFactory {
    constructor(state) {
        this.state = state;
    }
    item(content = "") {
        let i = new Item(this.state, content);
        return i;
    }
    power(content = "x", power = "2") {
        let i = new Power(this.state, content, power);
        return i;
    }
    normal(content = "x") {
        let i = new Normal(this.state, content);
        return i;
    }
    linetop() {
        let i = new LineTop(this.state);
        return i;
    }
    linetopEnd() {
        let i = new LineTopEnd(this.state);
        return i;
    }
    lineBot() {
        let i = new LineBot(this.state);
        return i;
    }
    lineBotEnd() {
        let i = new LineBotEnd(this.state);
        return i;
    }
}

import State from "./state.js";
export default class Framework {
    constructor() {
        this.state = new State();
        this.items = [];
        this.gap = 5;
    }
    //--function arguments shd be arguments and not classes unless required absoliutely.
    draw(x = 0, y = 0) {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].draw(this.state, x, y);
            if (this.items[i].width() > 0) {
                x += this.items[i].width() + this.gap;
            }
        }
        return true;
    }
    //--so a lat machine can always get segments from outside as long as they complyby ISegment interface
    add_item(item) {
        this.items.push(item);
        return item;
    }
} //ends

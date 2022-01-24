import Item from "./item.js";
import State from "../design/state.js";
export default class Normal extends Item {
    content: string;
    constructor(state: State, content?: string);
    width(): number;
    height(): number;
    draw(x: number, y: number): boolean;
}
//# sourceMappingURL=normal.d.ts.map
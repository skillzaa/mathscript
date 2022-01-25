import State from "../framework/state.js";
import Plugin from "./plugin.js";
export default class SScript extends Plugin {
    content: string;
    power: string;
    constructor(content?: string, power?: string);
    width(state: State): number;
    draw(state: State, x: number, y: number): boolean;
}
//# sourceMappingURL=aa.d.ts.map
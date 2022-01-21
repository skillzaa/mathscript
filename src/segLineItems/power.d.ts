import ISegment from "../latMachine/Isegment.js";
import State from "../state.js";
import { power_data } from "../app_data/power_data.js";
export default class Power implements ISegment {
    private content;
    private power;
    moveup: number;
    constructor(data: power_data);
    draw(state: State, local_x: number): number;
}
//# sourceMappingURL=power.d.ts.map
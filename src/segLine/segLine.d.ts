import LatMachine from "../latMachine/latMachine.js";
import { power_data } from "../app_data/power_data.js";
export default class SegLine extends LatMachine {
    private sqrt_open;
    private sqrt_startX;
    private sqrt_startY;
    constructor();
    insert_power(data: power_data): import("../latMachine/Isegment.js").default;
    insert_normal(str: string): import("../latMachine/Isegment.js").default;
    insert_sqrt(str: string): import("../latMachine/Isegment.js").default;
    insert_special(n?: number): import("../latMachine/Isegment.js").default;
}
//# sourceMappingURL=segLine.d.ts.map
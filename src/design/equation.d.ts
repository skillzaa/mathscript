import ISegment from "./Isegment.js";
import State from "./state.js";
import ItemsFactory from "./itemsFactory.js";
export default class Equation {
    segment_gap: number;
    private itemsFactory;
    private state;
    private segments;
    private lat_width;
    private lat_height;
    constructor(state: State);
    draw(): boolean;
    width(): number;
    height(): number;
    get_items(): ItemsFactory;
    add_segment(segment: ISegment): ISegment;
}
//# sourceMappingURL=equation.d.ts.map
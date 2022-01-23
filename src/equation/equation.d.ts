import State from "../design/state.js";
import SegFactory from "../design/segFactory.js";
export default class Equation {
    segment_gap: number;
    private state;
    private segments;
    private lat_width;
    private lat_height;
    private segFactory;
    constructor(state: State);
    add_seg(): SegFactory;
    draw(): boolean;
    width(): number;
    height(): number;
    private add_new_segment;
}
//# sourceMappingURL=equation.d.ts.map
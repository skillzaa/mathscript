import IDrawable from "../design/IDrawable.js";
import State from "../design/state.js";
export default class Segment implements IDrawable {
    private items;
    private item_gap;
    private seg_width;
    private seg_height;
    private state;
    constructor(state: State);
    width(): number;
    height(): number;
    draw(): boolean;
}
//# sourceMappingURL=Segment.d.ts.map
import ISegment from "./Isegment.js";
import Iitem from "./Iitem.js";
import state from "./state.js";
export default class Segment implements ISegment {
    private items;
    private item_gap;
    private seg_width;
    private seg_height;
    constructor();
    width(): number;
    height(): number;
    draw(state: state): boolean;
    add_item(item: Iitem): Iitem;
}
//# sourceMappingURL=segment.d.ts.map
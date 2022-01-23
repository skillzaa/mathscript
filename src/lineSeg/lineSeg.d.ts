import ISegment from "../design/Isegment.js";
import State from "../design/state.js";
import ItemsFactory from "./itemsFactory.js";
export default class LineSeg implements ISegment {
    private items;
    private item_gap;
    private seg_width;
    private seg_height;
    private itemsFactory;
    private state;
    constructor(state: State);
    get_items(): ItemsFactory;
    width(): number;
    height(): number;
    draw(): boolean;
    private insert_new_item;
}
//# sourceMappingURL=lineSeg.d.ts.map
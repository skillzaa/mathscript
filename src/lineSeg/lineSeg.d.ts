import ISegment from "../design/Isegment.js";
import Iitem from "../design/Iitem.js";
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
    add_item(item: Iitem): Iitem;
}
//# sourceMappingURL=lineSeg.d.ts.map
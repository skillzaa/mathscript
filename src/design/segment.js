export default class Segment {
    constructor() {
        this.items = []; // = [] is must not | []
        this.items = [];
        this.item_gap = 2;
        this.seg_height = 0;
        this.seg_width = 0;
    }
    width() {
        return this.seg_width;
    }
    height() {
        return this.seg_height;
    }
    draw(state) {
        for (let i = 0; i < this.items.length; i++) {
            let tf = this.items[i].draw(state);
            //--there may be control segments which may not move the x in that case dont add gap
            if (this.items[i].width() > 0) {
                state.addX(this.items[i].width() + this.item_gap);
            }
        }
        return true;
    }
    add_item(item) {
        this.seg_width += item.width();
        if (item.height() > this.seg_height) {
            this.seg_height = item.height();
        }
        this.items.push(item);
        return item;
    }
}

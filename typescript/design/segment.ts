import ISegment from "./Isegment.js";
import Iitem from "./Iitem.js";
import state from "./state.js";

export default class Segment implements ISegment {
private items:Iitem[] = []; // = [] is must not | []
private item_gap:number;
private seg_width:number;
private seg_height:number;
constructor(){
this.items = [];
this.item_gap = 2;
this.seg_height = 0;
this.seg_width = 0;
}
width(): number {
    return this.seg_width;
}
height(): number {
    return this.seg_height;
}
draw(state: state): boolean {
    for (let i = 0; i < this.items.length; i++) {
        
        let tf = this.items[i].draw(state);
        //--there may be control segments which may not move the x in that case dont add gap
        if (this.items[i].width() > 0){
           state.addX(this.items[i].width() + this.item_gap);
        }
}
return true;
}

add_item(item:Iitem){
this.seg_width += item.width();   
if (item.height() > this.seg_height){
        this.seg_height = item.height();
}     
this.items.push(item);
return item;
}
}
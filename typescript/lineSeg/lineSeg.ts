import ISegment from "../design/Isegment.js";
import Iitem from "../design/Iitem.js";
import State from "../design/state.js";
import ItemsFactory from "./itemsFactory.js";

export default class LineSeg implements ISegment {
private items:Iitem[] = []; // = [] is must not | []
private item_gap:number;
private seg_width:number;
private seg_height:number;
private itemsFactory:ItemsFactory;
private state:State;

constructor(state:State){
this.state = state;    
this.items = [];
this.item_gap = 2;
this.seg_height = 0;
this.seg_width = 0;
this.itemsFactory = new ItemsFactory(this.state);
}
get_items(){
return this.itemsFactory;
}
    
width(): number {
    return this.seg_width;
}
height(): number {
    return this.seg_height;
}
draw(): boolean {
    for (let i = 0; i < this.items.length; i++) {
        
        let tf = this.items[i].draw();
        //--there may be control segments which may not move the x in that case dont add gap
        if (this.items[i].width() > 0){
           this.state.incX(this.items[i].width() + this.item_gap);
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
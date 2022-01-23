import State from "../design/state.js";
import Item from "./item.js";

import Power from "./power.js";
import Normal from "./normal.js";
import LineTop from "./lineTop.js";
import LineTopEnd from "./lineTopEnd.js";
import LineBot from "./lineBot.js";
import LineBotEnd from "./lineBotEnd.js";
import IDrawable from "../design/IDrawable.js";

//--Just provide the item with default settings

export default class ItemsFactory {
private state:State;
private add_new_item_fn:(item:IDrawable) => IDrawable;

constructor(state:State , add_new_item_fn:(item:IDrawable)=> IDrawable){
this.state = state;
this.add_new_item_fn = add_new_item_fn;
}

// item(content=""){
// let i = new Item(this.state,content);
// this.add_new_item_fn(i);
// return i;
// }
power(content="x",power="2"){
let i = new Power(this.state,content,power);
this.add_new_item_fn(i);
return i;
}
normal(content="x"){
let i = new Normal(this.state,content);
this.add_new_item_fn(i);
return i;
}
linetop(){
let i = new LineTop(this.state);
this.add_new_item_fn(i);
return i;
}
linetopEnd(){
let i = new LineTopEnd(this.state);
this.add_new_item_fn(i);
return i;
}
lineBot(){
let i = new LineBot(this.state);
this.add_new_item_fn(i);
return i;
}
lineBotEnd(){
let i = new LineBotEnd(this.state);
this.add_new_item_fn(i);
return i;
}



}
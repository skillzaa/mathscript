import Item from "./item.js"
import State from "../design/state.js";

export default class Normal extends Item {
content:string;
constructor (state:State,content=""){
super(state);
this.content = content;    
}
width():number {
return this.state.chars_width(this.content);    
}
height():number {
return this.state.chars_width("Xi");    
}

draw():boolean{
this.state.drawTextDelta(this.content);    
return true;
}

}
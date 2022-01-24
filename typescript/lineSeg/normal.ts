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

draw(x :number,y :number):boolean{
this.state.drawText(this.content,x,y);    
return true;
}

}
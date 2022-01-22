import Iitem from "./Iitem.js";
import State from "./state.js";

export default class Item implements Iitem {
content:string;
state:State;

constructor (state:State,content=""){
this.state = state;    
this.content = content;    
}
width():number {
return this.state.chars_width(this.content);    
}
height():number {
return this.width() * 1.5;    
}

draw():boolean{
this.state.drawText(this.content);    
return true;
}

}
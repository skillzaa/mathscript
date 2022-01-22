import Item from "../design/item.js";
import State from "../design/state.js";

export default class Normal extends Item{
content:string; 
constructor (state:State, content:string){
    super(state);
this.content = content;  
}
width():number {
return this.state.chars_width(this.content); 
}
height():number {
return this.width() * 1.25;    
}

draw(state:State):boolean{
    this.state.drawText(this.content);
    return true;
}

}
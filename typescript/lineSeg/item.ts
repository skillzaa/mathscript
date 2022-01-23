import IDrawable from "../design/IDrawable.js";
import State from "../design/state.js";

export default class Item implements IDrawable {
content:string;
state:State;

constructor (state:State,content=""){
this.state = state;    
this.content = content;    
}
width():number {
return 0;    
}
height():number {
return 0;    
}

draw():boolean{
return true;
}

}
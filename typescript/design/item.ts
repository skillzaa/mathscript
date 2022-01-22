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
return 0;    
}
height():number {
return 0;    
}

draw():boolean{
return true;
}

}
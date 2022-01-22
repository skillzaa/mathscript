import Iitem from "./Iitem.js";
import State from "./state.js";

export default class Item implements Iitem {
state:State; 
constructor (state:State){
this.state = state;  
}
width():number {
return 0;    
}
height():number {
return this.width() * 1.5;    
}

draw(state:State):boolean{
return true;
}

}
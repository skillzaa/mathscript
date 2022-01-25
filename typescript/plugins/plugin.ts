import IDrawable from "../framework/IDrawable.js";
import State from "../framework/state.js";

export default class Plugin implements IDrawable {

constructor (){
}
width():number {
return 0;    
}
height():number {
return 0;    
}

draw(state :State, x :number,y :number):boolean{
return true;
}

}
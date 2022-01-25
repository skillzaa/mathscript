
import IDrawable from "../framework/IDrawable";
import State from "../framework/state";

export default class TextPlugin implements IDrawable {

draw(state:State, x: number, y: number): boolean {
    state.fontSize = 100;
    state.drawText("framework",100,100);
    return true;
}    

width(): number {
return 2;    
}
height(): number {
    return 4;
}
}
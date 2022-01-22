import State from "./state.js";


export default interface Iitem{
    width():number;
    height():number;
    draw(state:State):boolean; 
}

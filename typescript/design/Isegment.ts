import State from "./state.js";


export default interface ISegment{
    width():number;
    height():number;
    draw():boolean; 
}

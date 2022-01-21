import State from "../state.js";

export default interface ISegment{
    draw(state:State,starting_x:number):number; 
}

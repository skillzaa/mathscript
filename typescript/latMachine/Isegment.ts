import State from "../state.js";

export default interface ISegment{
    draw(state:State,local_x:number):number; 
}

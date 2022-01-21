import State from "../state.js";
import LocalData from "../segLine/localState.js";

export default interface ISegment{
    draw(state:State,starting_x:number,local_state:object):number; 
}

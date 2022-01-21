import State from "../state.js";
import LocalData from "./local_data.js";

export default interface ISegment{
    draw(state:State,starting_x:number,local_state:object):number; 
}

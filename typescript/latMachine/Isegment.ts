import State from "../state.js";

export default interface ISegment{
    draw(state:State,ctx:CanvasRenderingContext2D,local_x:number):number; 
}

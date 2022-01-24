// import State from "../design/state.js";
import Equation from "./equation.js";

export default function get_equation(ctx:CanvasRenderingContext2D,x:number,y:number):Equation{
        
    let equation = new Equation(ctx,x,y);
    equation.segment_gap = 50;
    return equation;
    
}
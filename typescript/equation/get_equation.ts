import State from "../design/state.js";
import Equation from "./equation.js";
//===========================================
export default function get_equation():Equation{
    let canvas = document.getElementById("crown");
    // @ts-expect-error
    let ctx = canvas.getContext('2d');
    // @ts-expect-error
    let state= new State(canvas,ctx);
    let equation = new Equation(state);
    equation.segment_gap = 50;
    return equation;
    
}
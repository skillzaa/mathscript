// import State from "../design/state.js";
import Equation from "./equation.js";
//===========================================
let canvas = document.getElementById("crown");
canvas = canvas;
// @ts-expect-error
canvas.width = window.innerWidth;
// @ts-expect-error
canvas.height = window.innerHeight;
//===========================================
export default function get_equation(x, y) {
    // @ts-expect-error
    let ctx = canvas.getContext('2d');
    let equation = new Equation(ctx, x, y);
    equation.segment_gap = 50;
    return equation;
}

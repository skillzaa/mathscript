// import State from "../design/state.js";
import Equation from "./equation.js";
export default function get_equation(ctx, x, y) {
    let equation = new Equation(ctx, x, y);
    equation.segment_gap = 50;
    return equation;
}

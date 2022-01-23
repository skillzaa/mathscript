import Grid from "./grid.js";
let canvas = document.getElementById("crown");
//@ts-expect-error
let g = new Grid(canvas);
//==================Grid Ends ================
import get_equation from "./equation/get_equation.js";
let equation = get_equation();
//==============================
let lseg = equation.add_seg().lineSeg();
lseg.add_item().lineBot();
lseg.add_item().normal("-2");
lseg.add_item().sqrt();
lseg.add_item().power("y", "2");
lseg.add_item().normal("+ 45y + 324");
lseg.add_item().sqrtEnd();
lseg.add_item().normal(" = -2(y+18)");
lseg.add_item().lineBotEnd();
console.log("eengn", equation);
g.draw();
equation.draw();

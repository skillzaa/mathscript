import Grid from "./grid.js";
let canvas = document.getElementById("crown");
//@ts-expect-error
let g = new Grid(canvas);

//==================Grid Ends ================
import get_equation from "./equation/get_equation.js";
let equation = get_equation();
let frac = equation.add_seg().frac();

frac.top.add_item().lineBot();
frac.top.add_item().normal("blaz blaz 2");
frac.top.add_item().power("X","2");
frac.top.add_item().lineBotEnd();
//..........................
frac.bot.add_item().power("w","x");
//==============================
let lseg = equation.add_seg().lineSeg();
lseg.add_item().normal(" + ");
lseg.add_item().lineBot();
lseg.add_item().normal("2ab * 354");
lseg.add_item().lineBotEnd();
// let line02 = equation.add_seg().lineSeg();

// let line02_item = line02.add_item().normal("a + b = c");

// let line03 = equation.add_seg().lineSeg();
// let line03_item = line02.add_item().normal("x + y = z");
// let frac = new Frac(state,line02,line03);
// let frac = equation
//..........................

console.log("eengn",equation);
g.draw();
equation.draw();

import Grid from "../grid.js";
let canvas = document.getElementById("crown");
//@ts-expect-error
let g = new Grid(canvas);

//==================Grid Ends ================
import get_equation from "../equation/get_equation.js";
let equation = get_equation();
let frac = equation.add_seg().frac();

frac.top.add_item().lineBot();
// frac.top.add_item()
frac.top.add_item().normal("blaz blaz 2");

frac.top.add_item().power("X","2");
frac.top.add_item().lineBotEnd();
//..........................
frac.bot.add_item().sqrt();
frac.bot.add_item().power("w","x");
frac.bot.add_item().sqrtEnd();
//==============================
let lseg = equation.add_seg().lineSeg();
lseg.add_item().normal(" + ");
lseg.add_item().lineBot();
lseg.add_item().normal("2ab * 354");
lseg.add_item().lineBotEnd();


console.log("eengn",equation);
g.draw();
equation.draw();

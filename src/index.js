import Grid from "./grid.js";
import Equation from "./equation/equation.js";
//===========================================
let canvas = document.getElementById("crown");
canvas = canvas;
// @ts-expect-error
canvas.width = window.innerWidth;
// @ts-expect-error
canvas.height = window.innerHeight;
// @ts-expect-error
let ctx = canvas.getContext('2d');
//===========================================
//@ts-expect-error
let g = new Grid(canvas);
//==================Grid Ends ================
let eq = new Equation(ctx);
let f = eq.add_seg().frac();
f.bot.add().lineBot();
f.top.add().sqrt();
f.top.add().normal("a + b + c");
f.top.add().sqrtEnd();
f.bot.add().lineBotEnd();
f.bot.add().normal("4x");
eq.draw(100, 100);
g.draw();
// ???????????????????????????????
// setInterval(function(){
//     eq1.state.incX(1);
//     eq1.draw();
//     console.log("animation");
// },1000);

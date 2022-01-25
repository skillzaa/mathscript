import Grid from "../plugins/grid.js";
import eq from "./first_decent.js";
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
let eq1 = eq(ctx,100,100);
let eq2 = eq(ctx,100,200);
// g.draw();
eq1.draw(100,100);
eq2.draw(100,200);
// ???????????????????????????????
// setInterval(function(){
//     eq1.state.incX(1);
//     eq1.draw();
//     console.log("animation");
// },1000);
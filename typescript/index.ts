import Grid from "./grid.js";
import EqEngine from "./eqEngine/eqengine.js";
// import Power from "./segLineItems/power.js";
import SegLine from "./segLine/segLine.js";
import Fraction from "./fraction/fraction.js";
import State from "./state.js";
let canvas = document.getElementById("crown");

// @ts-expect-error
let ctx = canvas.getContext('2d');
// @ts-expect-error
let state= new State(canvas,ctx);


// @ts-expect-error
let g = new Grid(canvas);
g.draw();

let eengn = new EqEngine();
eengn.segment_gap = 50;
//===============================
let segline = new SegLine();    
segline.insert_normal(" {(a+b)} = c ");
segline.insert_power({content:"H" , power:"n" , moveup: 10});
segline.insert_sqrt("abcdef");  
//==============================
let segline02 = new SegLine();    
segline02.insert_normal("x^2 + y^2 = z^2");
segline02.insert_power({content:"H" , power:"n" , moveup: 10});
segline02.insert_sqrt("x2f8");  
//==============================
let fraction = new Fraction(segline,segline02);
//==============================
eengn.add_segment(fraction);
console.log("eengn",eengn);
eengn.draw(state,state.x);

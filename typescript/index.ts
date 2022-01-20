import Grid from "./grid.js";
import EqEngine from "./eqEngine/eqengine.js";
import Power from "./segmentItems/power.js";
let canvas = document.getElementById("crown");
let g = new Grid(canvas);
g.draw();


let eengn = new EqEngine(canvas);

let segment = eengn.insert();
segment.insert_power();

console.log(eengn);
eengn.draw();
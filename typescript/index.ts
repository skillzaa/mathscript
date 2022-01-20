import Grid from "./grid.js";
import EqEngine from "./eqEngine/eqengine.js";
import Power from "./segmentItems/power.js";
let canvas = document.getElementById("crown");
let g = new Grid(canvas);
g.draw();


let eengn = new EqEngine(canvas);

let segment = eengn.add_segment();
segment.insert_power({content : "a",power:"3"});
segment.insert_normal({content:"+"});
segment.insert_power({content : "b",power:"3"});
segment.insert_normal({content:"="});
segment.insert_power({content : "c",power:"3"});
segment.insert_normal({content:"a+b=c"});

console.log(eengn);
eengn.draw();
import Prince from "./prince.js";
import Grid from "./grid.js";
import EqEngine from "./eqEngine/eqengine.js";
let canvas = document.getElementById("crown");
let g = new Grid(canvas);
g.draw();
let s = [
    { mode: "p", content: "a", power: "2" },
    { mode: "o", content: "+" },
    { mode: "p", content: "b", power: "2" },
    { mode: "o", content: "=" },
    { mode: "p", content: "c", power: "2" }
];
let prince = new Prince(canvas, s);
console.log("prince", prince);
prince.draw();
let eq_data = [
    { type: "icon", icon: "9749", content: "\u2615" },
    { type: "normal", content: " " },
    { type: "normal", content: "x" },
    { type: "normal", content: "=" },
    { type: "normal", content: "-" },
    { type: "normal", content: "b" },
    { type: "icon", icon: "177", content: "\u00B1" },
    { type: "sqrt", content: "ii" },
    { type: "power", content: "b", power: "2" },
    { type: "normal", content: "-" },
    { type: "normal", content: "4" },
    { type: "normal", content: "a" },
    { type: "power", content: "c", power: "2" }
];
let eqengine = new EqEngine(canvas, eq_data);

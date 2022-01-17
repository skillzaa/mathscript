import Prince from "./prince.js";
import Grid from "./grid.js";
let canvas = document.getElementById("crown");
let g = new Grid(canvas);
g.draw();


let s =  [
{ mode : "p" , content : "a" , power : "2"},
{ mode : "o" , content : "+"},
{ mode : "p" , content : "b" , power : "2"},
{ mode : "o" , content : "="},
{ mode : "p" , content : "c", power : "2"}
];
let prince = new Prince(canvas,s);
console.log("prince",prince);
prince.draw();

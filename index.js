import Grid from "./grid.js";
import Power from "./power.js";
import State from "./state.js";

var canvas = document.getElementById('crown');
const state= new State(canvas);
// const fontSize = 50;
let g = new Grid(canvas);
g.draw();

state.x = 100;
state.y = 100;
state.setFontSize(50);

let power = new Power(state,"Z",3);
power.draw();
state.ctx.font = '50px serif';
state.ctx.textBaseline = "top";

state.ctx.fillText( "XYZ" , state.x + power.width(), state.y);
// ctx.fillText( "---" , x + delta, y);

//-----------------------

// let equation = `x=\frac{-b\pm\sqrt{b^2-4ac}}
// {2a}`;
// let p = new Parser(ctx,equation);
// p.x=10;
// p.y=10;
// p.process();
// console.log("Parser",p);

// let x = 10;
// let y = 10;
// ctx.fillStyle = 'rgb(250, 0, 0)';
// ctx.font = '50px serif';
// ctx.textBaseline = "top";
// // ctx.fillText( "x= -b + sqrt b^2 -4ac/2a" , x, y);
// // let hexstring = "\u00A9";

// // ctx.strokeText("\u{1D120}", 100, 15);
// ctx.fillText("\u{00A9}",100,200);
// ctx.fillText("\u{26CE}",200,250);
// ctx.fillText("\u{26CF}",300,300);

// ctx.fillText("X",50,50);

// ctx.font = '25px serif';
// // ctx.textBaseline = "top";

// // ctx.fillText("\u{221A}",86,50 - 10);
// ctx.fillText("2",86,50 - 10);

// var measure = ctx.measureText("X");

// console.log("measure",measure);
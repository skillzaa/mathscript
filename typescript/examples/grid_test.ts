import Framework from "../framework/framework.js";
import Grid from "../plugins/grid.js";
import Text from "../plugins/text.js";
import SS from "../plugins/ss.js";

let f = new Framework();
f.gap = 15;

let grid = new Grid();
let ss = new SS("X","2");
let normal2 = new Text("more ...");
f.add_item(grid);
f.add_item(ss);
f.add_item(normal2);
f.draw(100,100);
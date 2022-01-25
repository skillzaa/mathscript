import Framework from "../framework/framework.js";
import TextPlugin from "../textPlugin/textPlugin.js";
import Grid from "../plugins/grid.js";
let grid = new Grid;
let t = new TextPlugin();
let f = new Framework();
f.add_item(grid);
f.add_item(t);
f.draw(100, 100);

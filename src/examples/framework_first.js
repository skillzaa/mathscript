import Framework from "../framework/framework.js";
import TextPlugin from "../textPlugin/textPlugin.js";
let t = new TextPlugin();
let f = new Framework();
f.add_item(t);
f.draw(100, 100);

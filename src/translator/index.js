import Trigger from "./trigger.js";
import Interpreter from "./interpreter.js";
let t = new Trigger();
t.lookfor = "findme";
let inter = new Interpreter("How can any one find you or findme.");
inter.triggers.push(t);
inter.run();

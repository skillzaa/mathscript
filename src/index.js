import Trigger from "./trigger.js";
import Interpreter from "./interpreter.js";
let inter = new Interpreter("brother \\asked a very good \\question");
let t = new Trigger();
t.lookfor = "brother";
inter.triggers.push(t);
inter.run();

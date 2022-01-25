import DrawState from "./drawState.js";
import DrawInstr from "./drawInstr.js";
import {Actions} from "./actions.js";


export default class DrawEngine {
state:DrawState;
instr:DrawInstr[];
constructor(instr :DrawInstr[]){
this.state = new DrawState();
this.instr = instr;
}

run(){
    for (let i = 0; i < this.instr.length; i++) {
        const instr = this.instr[i];
        switch (instr.action) {
            case Actions.DrawText:
            this.state.drawText(instr,100,100);    
                break;

            case Actions.Drawline:
                break;
        
            default:
                break;
        }
        
    }
}
}
import ITrigger from "./ITrigger.js"

export default class Interpreter {
    code:string;
    triggers:ITrigger[];

constructor(code:string=""){
this.code =code;    
this.triggers = []; 
// this.triggers.push("fr");--great
}

run(){
for (let t = 0; t < this.triggers.length; t++) {
    const trigger = this.triggers[t];
    const noOfChars = trigger.lookfor.length;

    for (let c = 0; c < this.code.length; c++) {
            const chars = this.code.substring(c,  c + noOfChars);

            if (chars == trigger.lookfor){
                // console.log("found", trigger.lookfor);
                trigger.callback(this.code,c);
            }
        
    }
    
}
}

}
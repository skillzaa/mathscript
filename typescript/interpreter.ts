import ITrigger from "./ITrigger.js"
import RawItem , {ItemType} from "./filters/rawItem.js";

export default class Interpreter {
    code:string;
    triggers:ITrigger[];
    // decode:CodeItem[];
    normalState:boolean;
constructor(code:string=""){
this.code =code;    
// this.decode = this.code_to_decode();    
this.triggers = []; 
this.normalState = true;
// this.triggers.push("fr");--great
}
run(){
let state = null;
for (let c = 0; c < this.code.length; c++) {
    if (this.code[c] == "\\"){
        console.log("find \\",c,this.code[c]);
    }
    console.log(c,this.code[c]);
    
}    
}

// run(){
// for (let t = 0; t < this.triggers.length; t++) {
//     const trigger = this.triggers[t];
//     const noOfChars = trigger.lookfor.length;

//     for (let c = 0; c < this.code.length; c++) {
//             const chars = this.code.substring(c,  c + noOfChars);

//             if (chars == trigger.lookfor){
//                 // console.log("found", trigger.lookfor);
//                 trigger.callback(this.code,c);
//             }
        
//     }
    
// }
// }//run

}
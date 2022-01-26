import ITrigger from "./ITrigger.js"


export default class Trigger implements ITrigger {
lookfor:string;
constructor(){
this.lookfor ="";    
}

callback(code: string, current_index: number): boolean {

    console.log("Trigger is" + this.lookfor,code,current_index);
    return true;
}



}


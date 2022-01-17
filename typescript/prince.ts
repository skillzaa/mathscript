import State from "./state.js";
import Power from "./power.js";
import Normal from "./normal.js";

export default class Prince {
state:State;

constructor(canvas,eq={}){
this.state = new State(canvas);    
this.eq = eq;
}
draw(){
  for (let i = 0; i < this.eq.length; i++) {
      switch (this.eq[i].mode) {
          
        case "p":
            let p = new Power(this.state,this.eq[i].content,this.eq[i].power);
            p.draw();
            console.log("power");
        break;
        case "o":
            let n = new Normal(this.state,this.eq[i].content);
            n.draw();
            console.log("operator");
        break;
      
          default:
              break;
      }
    //   console.log("fine", this.eq[i]);
      
  }  
}


}
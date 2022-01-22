import ISegment from "./Isegment.js";
import State from "../state.js";

export default class LatMachine {

protected segments:ISegment[] =[];
public segment_gap:number;
protected state:State;
protected local_state:{};

private lat_width:number;
private lat_height:number;

constructor (state:State){
this.state = state;
this.local_state = {};
this.segments = [];  
this.segment_gap = 2;
this.lat_width = 0 ;
this.lat_height = 0 ;
} 

draw():boolean{
    for (let i = 0; i < this.segments.length; i++) {
        //-----save state ctx here
        // this.state.resetFont();
        this.state.ctx.save();
        
        let tf = this.segments[i].draw(this.state,this.local_state);
        //-----restore state ctx here
        this.state.ctx.restore();
        //--there may be control segments which may not move the x in that case dont add gap
        if (this.segments[i].width() > 0){
           this.state.x += this.segments[i].width() + this.segment_gap;
        }
}
return true;
}

//=====================
width():number {
    return this.lat_width;
}
height():number {
    return this.lat_height;
}
//--function arguments shd be concrete data types and not classes / objects unless required absoliutely.


//--so a lat machine can always get segments from outside as long as they complyby ISegment interface
add_segment(segment:ISegment){
this.lat_width += segment.width();   
if (segment.height() > this.lat_height){
        this.lat_height = segment.height();
}     
this.segments.push(segment);
return segment;
}
}//ends
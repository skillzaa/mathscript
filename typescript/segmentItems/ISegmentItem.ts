import DrawResult from "./drawResult.js"; 


export default interface ISegmentItem {
    width():number;
    height():number;
    draw(arg:{}):DrawResult;
}// segment item
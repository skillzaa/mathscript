import IDrawResult from "./drawResult.js";

export default interface ISegment{
    draw(arg:{}):IDrawResult; 
}

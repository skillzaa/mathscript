import CharDataTempl from "./charDataTempl.js";
import { CharType } from "./charType.js";


export default function addChar(char :string,type :CharType, name :string ="" ):CharDataTempl{
let n = new CharDataTempl(char,type,name);
return n;
}
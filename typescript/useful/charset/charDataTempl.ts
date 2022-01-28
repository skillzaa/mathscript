import { CharType } from "./charType.js";

export default class CharDataTempl {

char :string;
name :string;
type :CharType;
width :number
height :number;

constructor(char :string,chartype :CharType,name :string=""){
this.char = char;
this.name = name;
this.type = chartype;
this.width = 0;
this.height = 0;  
    
}

}

//=================

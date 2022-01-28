import CharDataTempl from "./charDataTempl.js";
export default function addChar(char, type, name = "") {
    let n = new CharDataTempl(char, type, name);
    return n;
}

// import { CharType } from "./charType.js";
// import CharDataTempl from "./charDataTempl.js";
// import addChar from "./addChar.js";
// // import State from "../design/state.js"
// let charSet:CharDataTempl[] = [];
// //======================================
// charSet.push(addChar("a",CharType.Alphanumeric));
// charSet.push(addChar("b",CharType.Alphanumeric));
// charSet.push(addChar("c",CharType.Alphanumeric));
// charSet.push(addChar("d",CharType.Alphanumeric));
// charSet.push(addChar("e",CharType.Alphanumeric));
// charSet.push(addChar("f",CharType.Alphanumeric));
// charSet.push(addChar("g",CharType.Alphanumeric));
// charSet.push(addChar("h",CharType.Alphanumeric));
// charSet.push(addChar("i",CharType.Alphanumeric));
// charSet.push(addChar("j",CharType.Alphanumeric));
// charSet.push(addChar("k",CharType.Alphanumeric));
// charSet.push(addChar("l",CharType.Alphanumeric));
// charSet.push(addChar("m",CharType.Alphanumeric));
// charSet.push(addChar("n",CharType.Alphanumeric));
// charSet.push(addChar("o",CharType.Alphanumeric));
// charSet.push(addChar("p",CharType.Alphanumeric));
// charSet.push(addChar("q",CharType.Alphanumeric));
// charSet.push(addChar("r",CharType.Alphanumeric));
// charSet.push(addChar("s",CharType.Alphanumeric));
// charSet.push(addChar("t",CharType.Alphanumeric));
// charSet.push(addChar("u",CharType.Alphanumeric));
// charSet.push(addChar("v",CharType.Alphanumeric));
// charSet.push(addChar("w",CharType.Alphanumeric));
// charSet.push(addChar("x",CharType.Alphanumeric));
// charSet.push(addChar("y",CharType.Alphanumeric));
// charSet.push(addChar("z",CharType.Alphanumeric));
// charSet.push(addChar("A",CharType.Alphanumeric));
// charSet.push(addChar("B",CharType.Alphanumeric));
// charSet.push(addChar("C",CharType.Alphanumeric));
// charSet.push(addChar("D",CharType.Alphanumeric));
// charSet.push(addChar("E",CharType.Alphanumeric));
// charSet.push(addChar("F",CharType.Alphanumeric));
// charSet.push(addChar("G",CharType.Alphanumeric));
// charSet.push(addChar("H",CharType.Alphanumeric));
// charSet.push(addChar("I",CharType.Alphanumeric));
// charSet.push(addChar("J",CharType.Alphanumeric));
// charSet.push(addChar("K",CharType.Alphanumeric));
// charSet.push(addChar("L",CharType.Alphanumeric));
// charSet.push(addChar("M",CharType.Alphanumeric));
// charSet.push(addChar("N",CharType.Alphanumeric));
// charSet.push(addChar("O",CharType.Alphanumeric));
// charSet.push(addChar("P",CharType.Alphanumeric));
// charSet.push(addChar("Q",CharType.Alphanumeric));
// charSet.push(addChar("R",CharType.Alphanumeric));
// charSet.push(addChar("S",CharType.Alphanumeric));
// charSet.push(addChar("T",CharType.Alphanumeric));
// charSet.push(addChar("U",CharType.Alphanumeric));
// charSet.push(addChar("V",CharType.Alphanumeric));
// charSet.push(addChar("W",CharType.Alphanumeric));
// charSet.push(addChar("X",CharType.Alphanumeric));
// charSet.push(addChar("Y",CharType.Alphanumeric));
// charSet.push(addChar("Z",CharType.Alphanumeric));
// charSet.push(addChar("0",CharType.Alphanumeric));
// charSet.push(addChar("1",CharType.Alphanumeric));
// charSet.push(addChar("2",CharType.Alphanumeric));
// charSet.push(addChar("3",CharType.Alphanumeric));
// charSet.push(addChar("4",CharType.Alphanumeric));
// charSet.push(addChar("5",CharType.Alphanumeric));
// charSet.push(addChar("6",CharType.Alphanumeric));
// charSet.push(addChar("7",CharType.Alphanumeric));
// charSet.push(addChar("8",CharType.Alphanumeric));
// charSet.push(addChar("9",CharType.Alphanumeric));

// //=============special
// charSet.push(addChar("8730",CharType.Special,"sqrt"));


// let canvas = document.getElementById("crown");
// // @ts-expect-error
// let ctx = canvas.getContext('2d');
// let state = new State(ctx);

// let fixed_ht = state.chars_width("Xi");
// for (let i = 0; i < charSet.length; i++) {

//     switch (charSet[i].type) {
//         case "ALPHANUMERIC":
//         charSet[i].width = state.chars_width(charSet[i].char);
//         charSet[i].height =  fixed_ht;    
//         break;
//         case "SPECIAL":
//         charSet[i].width = state.chars_width(String.fromCodePoint(parseInt(charSet[i].char)));
//         charSet[i].height =  fixed_ht;    
//         break;
    
//         default:
//         break;
//     }  
// }
// console.log("Font = ",state.getFontSize());
// console.log("charSet Font = ",charSet);



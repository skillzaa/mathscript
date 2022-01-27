import { ItemType } from "./rawItem.js";
import findClosingBracket from "./findClosingBracket.js";
export default function markCommandClosingBrackets(code) {
    //--1-- find a command get its data
    //--2-- find its ending bracket and insert data into that
    for (let i = 0; i < code.length; i++) {
        const element = code[i];
        if (element.itemType == ItemType.CommandOpen) {
            let result = findClosingBracket(code, i);
            console.log("result ", result);
        }
    }
    return code;
}

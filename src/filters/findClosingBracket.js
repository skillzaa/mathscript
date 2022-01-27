import { ItemType } from "./rawItem.js";
export default function findClosingBracket(code, index) {
    let innerBrackets = 0;
    let opening = code[index];
    //imp start with index + 1 skip the starting itsself
    for (let i = index + 1; i < code.length; i++) {
        let item = code[i];
        //--Another opening bracket found so now have to skip one closing bracket
        //--keep in mind that "(" and CommnadOpen is one thing. CommandOpen has ( inside    
        if (item.content == "(" || item.itemType == ItemType.CommandOpen) {
            innerBrackets += 1;
        }
        if (item.content == ")") {
            if (innerBrackets < 1) {
                item.content = opening.content + "End)"; //power close
                item.itemType = ItemType.CommandClose;
                item.pairId = opening.pairId;
                return code;
            }
            else {
                innerBrackets -= 1;
            }
        }
    }
    return code;
}

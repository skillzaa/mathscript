import { ItemType } from "./rawItem.js";
export default function markCommandClosing(code, twitch = "\\p(", twitchEnd = "\\p()", id) {
    let state = false;
    let innerBrackets = 0;
    for (let i = 0; i < code.length; i++) {
        let item = code[i];
        if (item.content == twitch) {
            item.pairId = id;
            state = true; //only true
        }
        //--Another opening bracket found so now have to skip one closing bracket
        if (state == true && item.content == "(") {
            innerBrackets += 1;
        }
        if (state == true && item.content == ")") {
            if (innerBrackets < 1) {
                item.content = twitchEnd; //power close
                item.itemType = ItemType.CommandClose;
                item.pairId = id;
                state = false; // only false
            }
            else {
                innerBrackets -= 1;
            }
        }
    }
    return code;
}

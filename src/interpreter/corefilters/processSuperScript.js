import { ItemType } from "../item.js";
export default function processSuperScript(code) {
    let defaulyFontSize = 100;
    let state = false;
    for (let i = 0; i < code.length; i++) {
        let item = code[i];
        if (item.content == "\\p(" && item.itemType == ItemType.CommandOpen) {
            state = true;
        }
        if (state == true && item.content == "\\p(End)") {
            state = false;
        }
        if (state == true) {
            item.fontSize = 33;
        }
    }
    return code;
}

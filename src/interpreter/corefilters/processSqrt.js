import { ItemType } from "../item.js";
/**
 * Convert sqrt start into sqrt char and sqrt end into drawLine
 */
export default function processSqrt(code) {
    let defaulyFontSize = 100;
    let state = false;
    for (let i = 0; i < code.length; i++) {
        let item = code[i];
        if (item.content == "\\sqrt(" && item.itemType == ItemType.CommandOpen) {
            item.content = "8730";
            item.itemType = ItemType.data;
            getClosingPair(item.pairId, code, i);
        }
    }
    return code;
}
function getClosingPair(id, code, index) {
    for (let i = index + 1; i < code.length; i++) {
        const element = code[i];
        if (element.pairId == id) {
            element.itemType = ItemType.data;
            element.content = "drawline";
        }
    }
}

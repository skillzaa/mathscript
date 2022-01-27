import { ItemType } from "./rawItem.js";
export default function removeCommand(twitch = "\\p(", code) {
    for (let i = 0; i < code.length; i++) {
        const element = code[i];
        if (element.content == twitch && element.itemType == ItemType.CommandOpen) {
            let pairId = element.pairId;
            let r = deleteClosingPair(code, pairId);
            if (r == true) {
                code.splice(i, 1);
            }
            else {
                throw new Error("Failed to delete pair");
            }
        }
    }
    return code;
}
function deleteClosingPair(code, pairId) {
    for (let i = 0; i < code.length; i++) {
        const element = code[i];
        if (element.pairId == pairId && element.itemType == ItemType.CommandClose) {
            code.splice(i, 1);
        }
    }
    return true;
}

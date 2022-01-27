import RawItem , {ItemType} from "./rawItem.js";
import markCommandClosing from "./markCommandClosing.js";
export default function markCommandClosingAll(code:RawItem[]):RawItem[]{

    for (let i = 0; i < code.length; i++) {
    let item = code[i];
    if (item.itemType == ItemType.CommandOpen ){
        let twitch = item.content;
        let twitchEnd = item.content + ")";
        const id = Math.ceil(Math.random() * 10000);

        let retCode = markCommandClosing(code,twitch,twitchEnd,id);
        code = retCode; // Here ******
    }
       
}

return code;    
}
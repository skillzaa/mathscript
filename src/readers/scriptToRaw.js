import RawItem, { ItemType } from "./rawItem.js";
export default function scriptToRaw(code) {
    let normal_mode = true;
    const raw = [];
    let commandBuffer = "";
    for (let i = 0; i < code.length; i++) {
        const item = code[i];
        if (item == "\\") {
            normal_mode = false;
            commandBuffer = ""; //no need
        }
        if (normal_mode == false && item == "(") {
            commandBuffer += item; //add the bracket;
            normal_mode = true;
            let i = new RawItem();
            i.content = commandBuffer;
            i.itemType = ItemType.Command;
            raw.push(i);
            commandBuffer = "";
            continue; // if not it will add ( again
        }
        //----------------------------------
        if (normal_mode == true) {
            // collect items
            let i = new RawItem();
            i.content = item;
            i.itemType = ItemType.data;
            raw.push(i);
        }
        else {
            //collect commands
            commandBuffer += item;
        }
    }
    // console.log("raw" , raw); 
    return raw;
}

export var ItemType;
(function (ItemType) {
    ItemType["Command"] = "COMMAND";
    ItemType["data"] = "DATA";
})(ItemType || (ItemType = {}));
export default class RawItem {
    constructor() {
        this.content = "";
        this.fontSize = 100;
        this.x = 0;
        this.y = 0;
        this.itemType = ItemType.data;
    }
}

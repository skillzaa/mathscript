export var ItemType;
(function (ItemType) {
    ItemType["CommandOpen"] = "COMMANDOPEN";
    ItemType["CommandClose"] = "COMMANDCLOSE";
    ItemType["data"] = "DATA";
})(ItemType || (ItemType = {}));
export default class Item {
    constructor() {
        this.content = "";
        this.pairId = 0;
        this.fontSize = 100;
        this.x = 0;
        this.y = 0;
        this.completed = false;
        this.itemType = ItemType.data;
    }
}

export declare enum ItemType {
    CommandOpen = "COMMANDOPEN",
    CommandClose = "COMMANDCLOSE",
    data = "DATA"
}
export default class Item {
    itemType: ItemType;
    content: string;
    fontSize: number;
    pairId: number;
    completed: boolean;
    x: number;
    y: number;
    constructor();
}
//# sourceMappingURL=item.d.ts.map
export declare enum ItemType {
    CommandOpen = "COMMANDOPEN",
    CommandClose = "COMMANDCLOSE",
    data = "DATA"
}
export default class RawItem {
    itemType: ItemType;
    content: string;
    fontSize: number;
    pairId: number;
    completed: boolean;
    x: number;
    y: number;
    constructor();
}
//# sourceMappingURL=rawItem.d.ts.map
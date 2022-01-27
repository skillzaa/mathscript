export enum ItemType {
    CommandOpen = "COMMANDOPEN",
    CommandClose = "COMMANDCLOSE",
    data = "DATA"
}


export default class RawItem {
itemType:ItemType;
content:string;
fontSize:number;
pairId:number;
completed:boolean;
x:number;
y:number;
constructor(){
    this.content = "";
    this.pairId = 0;
    this.fontSize = 100;
    this.x = 0;
    this.y = 0;
    this.completed = false;
    this.itemType = ItemType.data;
}
}

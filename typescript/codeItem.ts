export enum InputType {
    Command = "COMMAND",
    data = "DATA"
}


export default class CodeItem {
type:InputType;
content:string;

constructor(){
    this.content = "";
    this.type = InputType.data;
}
}

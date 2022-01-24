export default class CharDataTempl {
    constructor() {
        this.char = "";
        this.type = CharType.Normal;
        this.width = 0;
        this.height = 0;
    }
}
//=================
var CharType;
(function (CharType) {
    CharType["Normal"] = "NORMAL";
    CharType["Special"] = "SPECIAL";
})(CharType || (CharType = {}));

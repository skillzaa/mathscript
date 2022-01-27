export default function markCommandClosing(code) {
    let state = false;
    let innerBrackets = 0;
    for (let i = 0; i < code.length; i++) {
        let item = code[i];
        if (item.content == "\\p(") {
            state = true;
        }
        if (state == true && item.content == ")") {
            state = false;
        }
        //--Another opening bracket found so now have to skip one closing bracket
        if (state == true && item.content == "(") {
            state = false;
        }
        if (state == true) {
            item.fontSize = 33;
        }
    }
    return code;
}

import Item from "./item.js";
export default class LineBotEnd extends Item {
    constructor(state) {
        super(state);
    }
    draw(x, y) {
        //=====add to local state
        this.state.draw_line(this.state.current_seg.line_bot_startX, this.state.current_seg.line_bot_startY, x, this.state.current_seg.line_bot_startY);
        this.state.set_bot_line_mid(x, y);
        return true;
    }
}

export default class TextPlugin {
    draw(state, x, y) {
        state.fontSize = 100;
        // state.ctx.fillStyle = "#ef0707";
        state.drawText("framework", 100, 100);
        return true;
    }
    width() {
        return 2;
    }
    height() {
        return 4;
    }
}

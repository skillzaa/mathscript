export default class Plugin {
    constructor() {
    }
    width() {
        return 0;
    }
    height() {
        return 0;
    }
    draw(state, x, y) {
        return true;
    }
}

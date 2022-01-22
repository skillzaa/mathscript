export default class Fraction {
    constructor(upper, lower) {
        this.upper = upper;
        this.lower = lower;
        this.divider = true;
    }
    width() {
        return 0;
    }
    height() {
        return 0;
    }
    draw(state, starting_x) {
        this.upper.draw(state, starting_x);
        //---widths 
        // let upper_width = state.ctx.measureText(this.upper.) 
        let old_y = state.y;
        state.y += 30;
        this.lower.draw(state, starting_x);
        state.y = old_y;
        return 100;
        // state.ctx.fillText(this.content, starting_x, state.y);
        // let m = state.ctx.measureText(this.content); 
        // return m.width;
    }
}

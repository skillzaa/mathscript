export default class Sqrt {
    constructor(content = "") {
        this.content = content;
        2;
        this.add_to_top_line = 10;
    }
    draw(state, local_x) {
        // state.ctx.font = '50px serif';  
        state.ctx.fillText(String.fromCodePoint(8730), local_x, state.y);
        let sqrt_width = state.ctx.measureText(String.fromCodePoint(8730)).width;
        let content_width = state.ctx.measureText(this.content).width;
        state.ctx.fillText(this.content, local_x + sqrt_width, state.y);
        //---------------
        state.ctx.strokeStyle = "red";
        state.ctx.beginPath();
        // let lineX = state.x + data.width;
        let lineX = local_x + sqrt_width;
        state.ctx.moveTo(lineX, state.y);
        state.ctx.lineTo(lineX + content_width + this.add_to_top_line, state.y);
        state.ctx.stroke();
        // state.ctx.restore();
        return 200;
    }
} //sqrt    

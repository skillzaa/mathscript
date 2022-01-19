export default function sqrt(state, data) {
    // this.state.ctx.save();
    // this.state.ctx.font = '50px serif';  
    // this.state.ctx.fillText(String.fromCodePoint(8730),this.state.x,this.state.y);
    // this.state.ctx.restore();
    state.ctx.save();
    state.ctx.font = '50px serif';
    state.ctx.fillText(String.fromCodePoint(8730), state.x, state.y);
    //-------------------------------------
    state.ctx.strokeStyle = state.strokeStyle;
    state.ctx.beginPath();
    let lineX = state.x + data.width;
    state.ctx.moveTo(lineX, state.y);
    state.ctx.lineTo(lineX + 30, state.y);
    state.ctx.stroke();
    //---------------------------------------------------
    state.ctx.restore();
    console.log(data.content);
}

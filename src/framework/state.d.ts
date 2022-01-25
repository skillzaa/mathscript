/** DrawEngine is concerned with drawing and templating it does not care about x or y */
export default class State {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    fontName: string;
    fontSize: number;
    fillStyle: string;
    strokeStyle: string;
    constructor();
    getFontSize(): number;
    setFontSize(n: number): void;
    chars_width(chars?: string, fontSize?: number, fontName?: string): number;
    draw_line(startX: number, startY: number, endX: number, endY: number): void;
    drawText(content: string, x: number, y: number): void;
}
//# sourceMappingURL=state.d.ts.map
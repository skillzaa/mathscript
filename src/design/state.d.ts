import SegStateData from "./seg_state_data.js";
export default class State {
    private x;
    private y;
    private ctx;
    private fontSize;
    private fontName;
    private canvas;
    current_seg: SegStateData;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D);
    getX(): number;
    getY(): number;
    draw_line_top(): void;
    draw_line_bot(): void;
    load_current_seg(width: number, height: number): void;
    addX(n: number): void;
    incX(n: number): void;
    decX(n: number): void;
    addY(n: number): void;
    incY(n: number): void;
    decY(n: number): void;
    getFontSize(): number;
    chars_width(chars?: string, fontSize?: number): number;
    drawText(content?: string, fontSize?: number, deltaX?: number, deltaY?: number): void;
    private setFontSize;
    private setFontName;
    private restoreCtx;
    private saveCtx;
    private resetFont;
    canvas_width(): number;
    canvas_height(): number;
}
//# sourceMappingURL=state.d.ts.map
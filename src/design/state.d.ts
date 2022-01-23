import SegStateData from "./seg_state_data.js";
export default class State {
    private x;
    private y;
    private ctx;
    private fontSize;
    private fontName;
    current_seg: SegStateData;
    fillStyle: string;
    strokeStyle: string;
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number);
    getX(): number;
    getY(): number;
    draw_line_top(): void;
    draw_line_bot(): void;
    draw_line(startX: number, startY: number, endX: number, endY: number): void;
    set_bot_line_mid(): void;
    load_current_seg(width: number, height: number): void;
    addX(n: number): void;
    incX(n: number): void;
    decX(n: number): void;
    addY(n: number): void;
    incY(n: number): void;
    decY(n: number): void;
    getFontSize(): number;
    chars_width(chars?: string, fontSize?: number): number;
    drawText(content?: string, x?: number, y?: number, fontSize?: number): void;
    drawTextDelta(content?: string, fontSize?: number, deltaX?: number, deltaY?: number): void;
    private setFontSize;
    private setFontName;
    private restoreCtx;
    private saveCtx;
    private resetFont;
    private init_ctx;
}
//# sourceMappingURL=state.d.ts.map
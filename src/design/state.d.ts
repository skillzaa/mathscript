export default class State {
    private x;
    private y;
    private ctx;
    private fontSize;
    private fontName;
    private canvas;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D);
    getFont(): string;
    addX(n: number): void;
    addY(n: number): void;
    getFontSize(): number;
    chars_width(chars?: string): number;
    private setFontSize;
    private setFontName;
    private restoreCtx;
    private saveCtx;
    private resetFont;
    canvas_width(): number;
    canvas_height(): number;
}
//# sourceMappingURL=state.d.ts.map
export default class State {
    x: number;
    y: number;
    ctx: CanvasRenderingContext2D;
    private fontSize;
    private fontName;
    private canvas;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D);
    getFontSize(): number;
    chars_width(chars?: string): number;
    setFontSize(n: number): void;
    setFontName(n: string): void;
    restoreCtx(): void;
    saveCtx(): void;
    private resetFont;
    getFont(): string;
    addX(n: number): void;
    addY(n: number): void;
    canvas_width(): number;
    canvas_height(): number;
}
//# sourceMappingURL=state.d.ts.map
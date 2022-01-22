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
    setFontName(n: string): void;
    private resetFont;
    getFont(): string;
    addX(n: number): void;
    addY(n: number): void;
    canvas_width(): number;
    canvas_height(): number;
}
//# sourceMappingURL=state-old.d.ts.map
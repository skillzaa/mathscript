export default class State {
    x: number;
    y: number;
    private fontSize;
    private fontName;
    private ctx;
    private canvas;
    constructor(canvas: any);
    getFontSize(): number;
    chars_width(chars?: string): number;
    setFontSize(n: number): void;
    setFontName(n: string): void;
    restoreCtx(): void;
    saveCtx(): void;
    resetFont(): void;
    getFont(): string;
    setX(n: number): void;
    setY(n: number): void;
    canvas_width(): number;
    canvas_height(): number;
}
//# sourceMappingURL=state.d.ts.map
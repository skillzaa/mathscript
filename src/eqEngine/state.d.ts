export default class State {
    x: number;
    y: number;
    fontSize: number;
    fontName: string;
    ctx: any;
    canvas: any;
    constructor(canvas: any);
    getFontSize(): number;
    chars_width(chars?: string): number;
    setFontSize(n: any): void;
    setFontName(n: any): void;
    restoreCtx(): void;
    saveCtx(): void;
    resetFont(): void;
    getFont(): any;
}
//# sourceMappingURL=state.d.ts.map
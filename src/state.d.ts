export default class State {
    x: number;
    y: number;
    fontSize: number;
    fontName: string;
    ctx: any;
    canvas: any;
    constructor(canvas: any);
    getFontSize(n: any): number;
    setFontSize(n: any): void;
    setFontName(n: any): void;
    restoreCtx(): void;
    saveCtx(): void;
    resetFont(): void;
    getFont(): any;
}
//# sourceMappingURL=state.d.ts.map
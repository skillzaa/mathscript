import State from "../state.js";
export default class SegmentItemAbs {
    protected state: State;
    protected data: object;
    protected localX: number;
    protected ctx: any;
    constructor(state: State);
    width(): number;
    height(): number;
    draw(arg?: {}): void;
}
//# sourceMappingURL=segmentItem.d.ts.map
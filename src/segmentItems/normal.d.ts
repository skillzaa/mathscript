import ISegment from "../eqEngine/Isegment.js";
export default class Normal implements ISegment {
    content: string;
    constructor(content: string);
    width(): number;
    draw(args?: {}): void;
}
//# sourceMappingURL=normal.d.ts.map
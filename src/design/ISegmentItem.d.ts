import State from "./state.js";
export default interface ISegmentItem {
    width(): number;
    height(): number;
    draw(state: State): boolean;
}
//# sourceMappingURL=ISegmentItem.d.ts.map
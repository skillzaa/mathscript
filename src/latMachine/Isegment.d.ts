import State from "../state.js";
export default interface ISegment {
    width(): number;
    height(): number;
    draw(state: State, local_state: any): boolean;
}
//# sourceMappingURL=Isegment.d.ts.map
import State from "./state.js";
export default interface IDrawable {
    width(): number;
    height(): number;
    draw(State: State, x: number, y: number): boolean;
}
//# sourceMappingURL=IDrawable.d.ts.map
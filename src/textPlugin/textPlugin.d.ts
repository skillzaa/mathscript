import IDrawable from "../framework/IDrawable";
import State from "../framework/state";
export default class TextPlugin implements IDrawable {
    draw(state: State, x: number, y: number): boolean;
    width(state: State): number;
    height(state: State): number;
}
//# sourceMappingURL=textPlugin.d.ts.map
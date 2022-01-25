import IDrawable from "../framework/IDrawable";
import State from "../framework/state";
export default class TextPlugin implements IDrawable {
    draw(state: State, x: number, y: number): boolean;
    width(): number;
    height(): number;
}
//# sourceMappingURL=textPlugin.d.ts.map
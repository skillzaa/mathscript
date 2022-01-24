import get_equation from "../equation/get_equation.js";
export default function eq(ctx, x, y) {
    let equation = get_equation(ctx, x, y);
    let lseg = equation.add_seg().lineSeg();
    lseg.add_item().lineBot();
    lseg.add_item().linetop();
    lseg.add_item().normal("-2");
    lseg.add_item().sqrt();
    lseg.add_item().power("y", "2");
    lseg.add_item().normal("+ 45y + 324");
    lseg.add_item().sqrtEnd();
    lseg.add_item().normal(" = -2(y+18)");
    lseg.add_item().lineBotEnd();
    lseg.add_item().lineTopEnd();
    return equation;
}

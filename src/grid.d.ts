export default class Grid {
    cell_height: number;
    cell_width: number;
    show_numbers: boolean;
    constructor(canvas: any);
    draw(): void;
    draw_horizontal(): void;
    draw_vertical(): void;
    draw_line(move_to_x: any, move_to_y: any, line_to_x: any, line_to_y: any): void;
    draw_number(number: any, x: any, y: any): void;
}
//# sourceMappingURL=grid.d.ts.map
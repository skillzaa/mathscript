export default class Grid {
    canvas: HTMLCanvasElement;
    numbers_fillStyle: string;
    lineColor: string;
    ctx: CanvasRenderingContext2D;
    cell_height: number;
    cell_width: number;
    show_numbers: boolean;
    constructor(canvas: HTMLCanvasElement);
    draw(): void;
    draw_horizontal(): void;
    draw_vertical(): void;
    draw_line(move_to_x: number, move_to_y: number, line_to_x: number, line_to_y: number): void;
    draw_number(number: number, x: number, y: number): void;
}
//# sourceMappingURL=grid-old.d.ts.map
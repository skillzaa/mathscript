

export default class Grid {
canvas:HTMLCanvasElement;    
numbers_fillStyle:string;
lineColor:string;
ctx:CanvasRenderingContext2D;

cell_height:number;
cell_width:number;
show_numbers:boolean;
constructor (canvas:HTMLCanvasElement){
this.canvas = canvas;
//@ts-expect-error    
this.ctx = canvas.getContext('2d');    
this.cell_width = 50;    
this.cell_height = 50;
this.show_numbers = true;   
this.numbers_fillStyle = "#b1b4c9";
this.lineColor = "#d9dcf7";
}

draw(){
    this.draw_horizontal();    
    this.draw_vertical();    
}
draw_horizontal(){
let x = 0;
let y = 0;
let width = this.canvas.width;
let height = this.canvas.height;
//end y remain the same
let end_x = x + width;
    do {   
    this.draw_line(x,y,end_x,y);
        if (this.show_numbers == true){
            this.draw_number(y,x,y);
        }
    y += this.cell_height;
    } while (height > y );
}
draw_vertical(){
let x = 0;
let y = 0;
let width = this.canvas.width;
let height = this.canvas.height;
//end y remain the same
let end_y = y + height;
    do {   
    this.draw_line(x,y,x,end_y);
            if (this.show_numbers == true){
                this.draw_number(x,x,y);
            }
    x += this.cell_width;
    } while (width > x );
}
draw_line(move_to_x:number,move_to_y:number,line_to_x:number,line_to_y:number){
this.ctx.strokeStyle = this.lineColor;
this.ctx.beginPath();
this.ctx.moveTo(move_to_x, move_to_y);
this.ctx.lineTo(line_to_x, line_to_y);
this.ctx.stroke();
}
draw_number(number:number,x:number,y:number){
this.ctx.fillStyle = this.numbers_fillStyle;
this.ctx.font = '10px serif';
this.ctx.textBaseline = "top";
this.ctx.fillText(number.toString(),x,y);
}
}
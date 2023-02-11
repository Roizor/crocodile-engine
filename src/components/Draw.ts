import { Engine } from "./Engine";

export class draw {
    public Image(source: string, x: number, y: number) {
        let tempImg = document.createElement('img');
        tempImg.src = source;
        tempImg.onload = () => {
            Engine.context.drawImage(tempImg, x, y);
        }
    }
    public Square(color: string, x1: number, x2:number, w:number, h:number) {
        Engine.context.fillStyle = color;
        Engine.context.fillRect(x1, x2, w, h);
    }
    public Text(font:string,c:string,x1:number,x2:number, moving:boolean=false) {
        Engine.context.font = font;
        Engine.context.fillText(c, x1, x2);
    }
}
export const Draw = new draw();
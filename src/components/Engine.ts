import { HTMLHelper } from "../helpers/HTMLHelper";
import { Renderer } from "./Renderer";

declare global {
    interface Window { Crocodile: any; }
}

class engine {
    public ticks: number = 0;
    public canvas: any = HTMLHelper.new("canvas", "croc-engine");
    public context: CanvasRenderingContext2D;
    public hookRenderLoop: ()=>void;
    public renderLoop(hrl: void): void {
        this.context = this.canvas.getContext('2d');
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
        hrl;
        Renderer.render();
        this.ticks++;
    }
    public start() {
        if(!HTMLHelper.id("croc-engine")) {
            this.canvas = HTMLHelper.new("canvas", "croc-engine");
            document.body.appendChild(this.canvas);
        }
        this.context = this.canvas.getContext('2d');
        setInterval(() => {
            this.renderLoop(this.hookRenderLoop());
            Renderer.renderQueue.splice(0,Renderer.renderQueue.length)
        },10);
        
    }
    public hook() { window.Crocodile = this; window.Crocodile.Engine.start(); }
}

export const Engine = new engine();
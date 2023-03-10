class Graphics {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  
  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d");
    
    this.ctx!.imageSmoothingEnabled = false;
  }
}

const g: Graphics = new Graphics("canvas");

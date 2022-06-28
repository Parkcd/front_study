class Chart{
    constructor(width , height){
        this.width = width;
        this.height = height;
    }
    drawLine() {
        console.log('draw line');
    }
}

class BarChart extends Chart{
    constructor(width , height){
        super(width, height); // super()는 상위 생성자를 부를때 씀
    }
    draw(){
        this.drawLine();
        console.log(`draw ${this.width} x ${this.height} barChart`);
    }
}

const barchart1 = new BarChart(100 , 100);
barchart1.draw();
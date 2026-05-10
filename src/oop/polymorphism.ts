// polymorphism bohurupi 
class Shape {
    getArea() {
        return 0;
    }
}

class circle extends Shape {
    redius: number;

    constructor(redius: number) {
        super();
        this.redius = redius;
    }
    getArea(): number {
        return Math.PI * this.redius * this.redius;
    }
}

class rectangle extends Shape {
    hight: number;
    width: number;

    constructor(hight: number, width: number) {
        super();
        this.hight = hight;
        this.width = width;
    }
    getArea(): number {
        return this.hight * this.width;
    }
}

const getArea=(param:Shape)=>{
    console.log(param.getArea());
};
const Shape1=new Shape();
const circle1=new circle(10);
const rectangle1=new rectangle(10,10);

(getArea(circle1))

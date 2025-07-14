class Shape{
    area():number{
        return 0
    }
}

class Circle extends Shape{
    radius:number;
    constructor(radius:number){
        super();
        this.radius=radius
    }

    override area():number{

        return Math.PI*this.radius * this. radius
    }
}

class Square extends Shape{
    side:number
    constructor(side:number){
        super()
        this.side=side
    }

   override area():number{
        return this.side * this.side
    }
}

const circle = new Circle(4)
console.log(circle.area())

const square = new Square(5)
console.log(square.area())
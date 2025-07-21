type Circle3 ={
    kind: "circle"
    radius:number
}

type Rectangle ={
    kind : "rectangle"
    width:number;
    height:number
}

type Square2 ={
    kind : "square";
    side:number;
}

type Shape3 = Circle3| Rectangle | Square2


function calculateArea(shape:Shape3): number {

    switch (shape.kind){
        case "circle":
        return Math.PI * shape.radius**2

        case "rectangle":
        return shape.width * shape.height

        case "square":
        return shape.side ** 2 

          default:
      // Exhaustiveness check (optional safety)
      const _exhaustive: never = shape;
      return _exhaustive;
    }

}

const cn: Circle3 = { kind: "circle", radius: 5 };
const r: Rectangle = { kind: "rectangle", width: 10, height: 4 };
const s: Square2 = { kind: "square", side: 3 };

console.log(calculateArea(cn));
console.log(calculateArea(r)); 
console.log(calculateArea(s)); 
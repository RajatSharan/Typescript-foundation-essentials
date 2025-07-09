interface Person{
    name:string
    age:number
}

const user:Person={

    name:"Rajat",
    age:33

}

//2. Optional Properties

interface Product {
    name : string
    price:number
    description?:string
}

const electric:Product={

    name: "AC",
    price: 13555,

}

//3. Readonly Properties

interface Car{
    readonly vin:string
    model: string
}


const car:Car={
    vin:"NUM",
    model:"2016"
}

//4. Interface with Functions

interface Calculator {
    add(a:number,b:number):number
}

const simplecal:Calculator={
    add:(x,y)=>x+y
}

console.log(simplecal.add(5,3))


// 5. Interface for index signature (array)

interface NumberArray {
    [index:number]:number
}

const scores: NumberArray=[90,85,75]

//console.log(scores)

//6. Extend an interface

interface Shape {
    color:String
}

interface Circle extends Shape{
    raduis : number
}

const circleObj:Circle={
    color:"red",
    raduis:10
}

console.log(circleObj)
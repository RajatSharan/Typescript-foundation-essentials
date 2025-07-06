let myName : string ="Rajat"

let age : number = 23
let isstudent : boolean= false;

let flexible :any = "Hello"
flexible=101

let maybe : unknown ="Typescript"

if (typeof maybe === "string"){
    let upper =maybe.toUpperCase()
    console.log(upper)
}

function greet(): void {
        console.log("Welcome to Typescript")
}

greet()

function fail():never{
    throw new Error("Somthing went wrong")
}

//fail()

let notAssigned : undefined=undefined
console.log(notAssigned)

let number : number[]=[1,2,3,4]
console.log(number)
let fruits:Array<string>=["Apple","Banana"]
console.log(fruits)

let id:string|number
id="abc123"
id=45678

console.log(id)
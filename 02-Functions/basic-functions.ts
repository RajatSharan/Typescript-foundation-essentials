//1. Function with string input and string output


function welcomeUser(name:string):string
{
    return `Welcome, ${name}`;
}

// 2. Function expression to subtract two numbers

const subtract = function (a: number, b: number): number {
  return a - b;
};


// 3. Arrow function to multiply two numbers

const multiply = (a:number,b:number):number => (a*b) ;

// 4. Function with optional parameter

function greet(name:string,title?:string):string{
    return title?`Hello , ${name}`: `Hello,${name}`
}

// 5. Function with default parameter

function orderItem(item:string="Coffee"):string{
    return `you ordered:${item}`
}

//6. Function using rest parameters

function totalMarks(...marks:number[]):number{
    return marks.reduce((total,mark)=>total+mark,0)
}

// 7. Function returning boolean

function isAdult(age:number):boolean{
    return age >=18
}

// 8. Function with void return type

function showAlert(message:string):void{
    console.log(`Alert:${message}`)
}

console.log(orderItem())
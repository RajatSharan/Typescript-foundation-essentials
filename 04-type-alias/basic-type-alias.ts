// 1. Create a type alias for a string ID

type UserID = string

let id1: UserID="RAJAT"

console.log(id1)

// 2. Create a type alias for a user object

type User ={
    username:string
    age:number
    email?:string
}

const userDetails:User ={
    username:"RAJAT",
    age:34
}

console.log(userDetails)

//3. Create a type alias for a union type (number | string)

type ProductID = number | string
let pid:ProductID=101

console.log(pid)

// 4. Create a function type alias and implement it

type multiple=(a:number,b:number)=>number
const multi:multiple=(x,y)=>x*y

// ✅ 5. Use nested type aliases

type location ={
    city:string
    state: string
}


type Company ={
    name:string
    location: location
}

const myCompy:Company={

     name: "OpenAI",
  location: {
    city: "San Francisco",
    state: "CA",

}
}


console.log(myCompy)
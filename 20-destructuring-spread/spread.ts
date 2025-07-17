const arrsp =[1,2,3,5]
const arr2=[...arrsp,4,6,7]//clone and add

console.log(arr2)


//Marge two array into new one

const n= [1,2]
const m=[3,4]

const g=[...n,...m]
console.log(g)

//Using Spread Operator in Objects

const info2 = {User1: "Rajat",age :30}
const updateUser = {...info2,age:31,city:"Udaipur"}

console.log(updateUser)
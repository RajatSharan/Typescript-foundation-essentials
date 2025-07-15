//Method 1: Using []

let userarr: string[] = ['sid','rahul']

// ✅ Method 2: Using Array<Type>

let score:Array<number>=[70,45,43]

//Push
userarr.push("Mohit")
console.log(userarr)

//POP
userarr.pop()
console.log(userarr)

//Unshift

userarr.unshift("Mayank")
console.log(userarr)

//Shift

userarr.shift()
console.log(userarr)

//Includes

let includeArr=userarr.includes("Sid")
console.log(includeArr)

//indexOf()

let index =userarr.indexOf("rahul")
console.log(index)

//slice()	

let slice = userarr.slice(0,1)
console.log(slice)

//splice()


//array.splice(startIndex, deleteCount, item1?, item2?, ...)
let fruits1 = ["apple", "banana", "cherry", "mango"];
fruits1.splice(1, 1,"Kiwi"); 
console.log(fruits1)


//JOIN

let arr1 =["apple", "banana", "cherry", "mango"];
let newarray =arr1.join(",")
console.log(newarray)


//REVERSE
let arr3 = ["apple", "banana", "cherry", "mango"];
let reverArray = arr3.reverse()
console.log(arr3)


//SORT

let arr4:Array<string> = ["apple", "banana", "mango", "cherry"];
console.log(arr4.sort())

//MAP

let arr5 :Array<number> = [2,3,4,5,6,7,86,76]
let evenNumber = arr5.map((i)=>i%2===0 ?"EvennNUmber": "Odd number")

console.log(evenNumber)


//Filter

let arr6 :Array<number> = [2,3,4,5,6,7,86,76]

let evenODD = arr6.filter((i)=> i%2===0)
console.log(evenODD)

//Reduce

let arr7 = [1,2,3,4,5,6]

let sum= arr7.reduce((acc,i)=> i+acc,3)

console.log(sum)
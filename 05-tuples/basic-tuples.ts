// ✅ 1. Create a tuple with name (string) and age (number)

let person : [string,number]=["Rajat",26]

// ✅ 2. Tuple with optional age

let employee: [string,number?] = ["Amit"]

// ✅ 3. Tuple with labels for readability

let customer:[id:number,name:string] =[101,"John"]

console.log(customer)

// ✅ 4. Tuple as readonly

const corrdinates :readonly[number,number]= [40.3434,-74.43534]
console.log(corrdinates)

// ✅ 5. Tuple with rest elements

let dataPack:[string,...number[]]
dataPack=["Payload",12,34,56]

console.log(dataPack)


// ✅ Function returning tuple

function  getCredentials():[string,string]{
return["rajat123","admin"]

}

// ✅ Function accepting tup

function printProduct([name,price]:[string,number]){
    console.log(`Product:${name},Price:₹${price}`)
}

printProduct(["Rajat",20])

// ✅ Function returning readonly tuple

function getRange(): readonly [number, number] {
  return [10, 50];
}
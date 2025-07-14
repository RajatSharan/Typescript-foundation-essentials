// Map Methods

/* set, get,delete,clear,has,entries()*/

const numbersMap= new Map<string,number>([

    ["a",1],
    ["b",2],
    ["c",3],
    ["d",4]

])

for(let[key,value] of numbersMap.entries()){

    if(value%2===0){
        console.log(`${key}:${value} is even`)
    }
    else{
        console.log(`${key}:${value} is odd`)
    }

}


let creds = new Map<string,string>
creds.set("Rajat","123")
creds.set("Mohit","234")
console.log(creds.get("Mohit"))

console.log(creds.has("ROs"))
//console.log(creds.delete("Mohit"))

console.log(creds.values())
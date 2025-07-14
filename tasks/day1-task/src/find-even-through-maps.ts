const numbers= new Map<string,number>([

    ["a",1],
    ["b",2],
    ["c",3],
    ["d",4]

])

for(let[key,value] of numbers.entries()){

    if(value%2===0){
        console.log(`${key}:${value} is even`)
    }

}

function identity<T>(value:T):T{
    return value
}

const output1=identity<string>("RAJAT")
const output2=identity<number>(3)


function getTest(arr:any[]){

    return arr[0]
}

const val1 = getTest(["TEST","1","4"])
console.log(val1)
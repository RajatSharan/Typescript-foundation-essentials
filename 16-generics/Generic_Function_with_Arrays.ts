//Generic Function with Arrays

function getFirstElement<T>(arr:T[]){

    return arr[1]

}

const t1= getFirstElement(["TEST","2","3"])
console.log(t1)
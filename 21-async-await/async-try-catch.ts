async function riskyOperation(): Promise<number>{

    let success = Math.random()>0.5
    if(success){
        return 42
    }
    else{
        throw new Error("Somthing went wrong")
    }
}

async function runRisky(){
    try{
        const result = await riskyOperation()
        console.log("Result",result)
    }
    catch(error:any){
        console.log("ERROR",error.message)
    }

}

runRisky()
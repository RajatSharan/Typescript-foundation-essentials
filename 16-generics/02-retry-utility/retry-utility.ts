

async function flakyApi():Promise<number> {

    if(Math.random()<0.7){
        throw new Error(" Try again")
    }
    return 100

}

(async ()=>{
        try{
            const result =await  retry(flakyApi,5)
            console.log("Final Result",result)
        }
        catch(error:any){
            console.log("All attempts failed", error.message)
        }
})();

// 🔁 2. Generic retry utility function
async function retry<T>(fn:()=>Promise<T>,attempts:number):Promise<T>{

    for (let i=0;i<attempts;i++){
        try{
            return await fn()
        }
        catch(err){
            console.log(`Attempts ${i+1} failed`)
            if(i===attempts-1) throw err;
        }
    }

    throw new Error("Retry Failed")
}

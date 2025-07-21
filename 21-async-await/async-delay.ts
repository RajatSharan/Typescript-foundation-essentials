function delay(ms:number):Promise<string>{

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve("Delay Complete")

        },ms)

    })

}

async function run(){
    console.log("Start...")
    const msg= await delay(5000)
    console.log(msg)
    console.log("END")
}


run()


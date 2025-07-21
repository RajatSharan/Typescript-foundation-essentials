async function getUserData(id:number): Promise<string>{

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve(`User data for ID ${id}`)

        },1000)
    })


}

async function displayUser(){

    console.log("Fetch Data....")
    const data = await getUserData(100)
    console.log(data)
}

displayUser()
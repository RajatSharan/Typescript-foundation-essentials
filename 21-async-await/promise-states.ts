function simulatePromise(state : "Reject"|"Resolve"| "Pending"):Promise<string>{

    return new Promise((resolve,reject)=>{

        console.log("Promise started (pending)")

        setTimeout(()=>{

            switch(state){
                case "Resolve":
                    resolve("Promise resolved successfully!")
                    break

                case "Reject":
                    reject("Promise rejected!")
                    break

                case "Pending":
                default:
                console.log("⌛ Staying in pending state (no resolve or reject)");
                
            }
        },3000)
    })
}

simulatePromise("Resolve")
    .then((res)=> console.log("THEN:",res))
    .catch((err)=>console.log("CATCH:",err))
simulatePromise("Reject")
  .then((res) => console.log("THEN:", res))
  .catch((err) => console.log("CATCH:", err));
simulatePromise("Pending")
  .then((res) => console.log("THEN:", res))
  .catch((err) => console.log("CATCH:", err));

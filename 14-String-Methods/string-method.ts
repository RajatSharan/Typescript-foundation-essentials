let text:string = "Rajat Sharan"

console.log(text.length)
console.log(text.trim())
console.log(text.toUpperCase())
console.log(text.includes("Rajat"))
console.log(text.replace("Rajat","Rajjo"))
console.log(text.substring(0,4))
console.log(text.replaceAll("Rajat","RAJAT"))

console.log(text.split(" "))

let language :string = "JavaScript,java,python"
const languages = language.split(",")
for(let i of languages){

    if(i==="C++"){
        console.log("Found Java")
    }

}



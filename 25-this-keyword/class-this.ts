class PersonInfo {
    name : string

    constructor (name:string){
        this.name=name
    }



greet(){
    console.log(`Hello,my name the ${this.name}`)
}
}

const p = new PersonInfo("Rajat")
p.greet()




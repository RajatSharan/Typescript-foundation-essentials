//✅ 4. Constructor with Optional Parameters

class UserDetails {
    name:string;
    role?:string

constructor(name:string,role?:string){
    this.name=name
    this.role=role
}

getinfo(){
    return `${this.name}-${this.role??"Guest"}`
}
}

const user1 = new UserDetails("Rajat");

console.log(user1.getinfo())
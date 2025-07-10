class Person{
    name:string
    constructor( name :string){
        this.name=name
    }
}
class Employee extends Person{

    id :number;

    constructor(name:string,id : number){
        
        super(name)
        this.id=id
    }
getDetails(){
    return `${this.name}-${this.id}`
}
}

const emp=new Employee("Rajat",101)
console.log(emp.getDetails())
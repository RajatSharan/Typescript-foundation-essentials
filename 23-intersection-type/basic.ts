type person ={

    name : string

}

type Employee1 ={
    employeeId:number;
}

type staff1= person & Employee1

const rajat:staff1={
    name : "Rajat",
    employeeId: 101
}

console.log(rajat)


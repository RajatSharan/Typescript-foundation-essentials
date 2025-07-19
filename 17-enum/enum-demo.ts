//Default

enum testExecution {
    Pass,
    Fail,
    Skip
}

console.log(testExecution.Fail)


//Enum With String Value

enum userRole{
    admin="Admin",
    Manager="RAJAT",
    Employee="Employee"

}


console.log(userRole.Manager)

//Enum with custom value

enum priority{
    low=1,
    medium=2,
    high=3
}

console.log(priority.high)


function getRole(role:userRole):string{
        if(role ===userRole.admin){
            console.log("Access Provides")
            return "Access Provides"
        }
        console.log("Access Denied")
        return "Access Denied"
}

console.log(userRole.admin)
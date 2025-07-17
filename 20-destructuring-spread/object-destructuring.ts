//Properties from object
const users={

    names:'Rajat',
    ages:30,
    locations:'NYC'

}

const {names:username,locations,ages=40}=users

console.log(username)
console.log(locations)
console.log(ages)
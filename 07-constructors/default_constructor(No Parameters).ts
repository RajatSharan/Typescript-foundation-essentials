class Bike{
    brand:string = "Hero"
    model:string = "splender"

get info():string {
    return `${this.brand}-${this.model}`

}
}

const details =new Bike()
console.log(details.info)

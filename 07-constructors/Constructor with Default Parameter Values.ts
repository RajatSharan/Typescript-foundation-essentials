//✅ 3. Constructor with Default Parameter Values

class Laptop {
    brand : string
    model: string


constructor(brand:string='Dell',model:string='XPS'){
    this.brand=brand
    this.model=model
}

getInfo(){
    return `${this.brand}-${this.model}`
}

}

const getdetails = new Laptop()
console.log(getdetails)
console.log(getdetails.getInfo())
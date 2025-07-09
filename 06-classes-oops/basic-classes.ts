class Car {
    brand : string;
    model: string;    


constructor(brand:string,model:string){

    this.brand=brand
    this.model=model

}
getinfo():string{
    return `${this.brand}-${this.model}`
}
}



const info = new Car("BMW","2016")

console.log(info.getinfo())




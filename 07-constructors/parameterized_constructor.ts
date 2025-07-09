class Product {
    name : string;
    price: number;
    discountPercent : number


constructor (name: string,price:number,discountPercent:number){

    this.name=name
    this.price=price
    this.discountPercent=discountPercent

}

getFinalPrice():number{

    let discounted  = this.price - (this.price * this.discountPercent / 100)
    return discounted 


}

}

const price =  new Product("TV",1234.3,20)
console.log(price)
console.log(price.getFinalPrice())
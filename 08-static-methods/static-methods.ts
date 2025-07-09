class mathUtill{
    static add(a:number,b:number):string{
        const sum=a+b
        return `Sum of number is ${sum}`
    }
    static sub(c:number,d:number):string{
        const sub=c-d
        return `Sub of number is ${sub}`
    }
}

console.log(mathUtill.add(2,3))
console.log(mathUtill.sub(5,3)) 
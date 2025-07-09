//🔹 Scenario 1: private Access Modifier

class BankAccount{

    public accountHolder :string
    private  balance : number

    constructor(accountHolder :string,balance : number){
        this.accountHolder=accountHolder
        this.balance=balance
    }

    deposit(amount:number){

        return amount+this.balance

    }
    withdraw(amount: number) 
    {
        return amount-this.balance
    }

}

const acc = new BankAccount("Rajat", 1000);
const win = new BankAccount("Jatin",500)
console.log(acc.deposit(500));
console.log(win.withdraw(1000))


//Scenario 2: protected Access Modifier

class Vehicle{
    public speed:number

constructor(speed:number){

    this.speed=speed
}
}
class Car1 extends Vehicle{

    accelerate(){

        return `${this.speed}`

    }
}

const myCar = new Car1(100);
myCar.speed = 100;

myCar.accelerate()
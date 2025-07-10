class Animal {

      move(){
        console.log("Animal can Walk")
    }
}

class Dog  extends Animal{

    bark(){
        console.log("Dog should bark")
    }
}


const dog= new Dog()
dog.bark()
dog.move()
# TypeScript Cheatsheet

This cheatsheet provides a quick reference for essential TypeScript concepts, perfect for a quick recap.

---

## 00-Setup

* **Installation**:
    ```bash
    npm install -g typescript
    ```
* **Compile a file**:
    ```bash
    tsc your-file.ts
    ```
* **Initialize `tsconfig.json`**:
    ```bash
    tsc --init
    ```
    This creates `tsconfig.json` for project-wide configuration.

---

## 01-Datatypes

* **Primitive Types**:
    ```typescript
    let isDone: boolean = false;
    let decimal: number = 6;
    let color: string = "blue";
    ```
* **`any`**: Opt-out of type checking. Use sparingly.
    ```typescript
    let notSure: any = 4;
    notSure = "maybe a string";
    ```
* **`unknown`**: Safer alternative to `any`. Requires type checking before operations.
    ```typescript
    let value: unknown = "hello";
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // OK
    }
    ```
* **`void`**: For functions that return nothing.
    ```typescript
    function warnUser(): void {
        console.log("Warning!");
    }
    ```
* **`null` and `undefined`**: Subtypes of all other types by default (if `strictNullChecks` is off).
    ```typescript
    let u: undefined = undefined;
    let n: null = null;
    ```
* **`never`**: For functions that never return (e.g., throwing an error, infinite loop).
    ```typescript
    function error(message: string): never {
        throw new Error(message);
    }
    ```

---

## 02-Functions

* **Function Declaration**:
    ```typescript
    function add(x: number, y: number): number {
        return x + y;
    }
    ```
* **Arrow Function**:
    ```typescript
    const subtract = (x: number, y: number): number => x - y;
    ```
* **Optional Parameters**: Use `?`.
    ```typescript
    function greet(name: string, greeting?: string): string {
        return `${greeting || "Hello"}, ${name}!`;
    }
    ```
* **Default Parameters**:
    ```typescript
    function greetDefault(name: string, greeting: string = "Hello"): string {
        return `${greeting}, ${name}!`;
    }
    ```
* **Rest Parameters**: Gather remaining arguments into an array.
    ```typescript
    function sumAll(...numbers: number[]): number {
        return numbers.reduce((acc, num) => acc + num, 0);
    }
    ```
* **Function Overloading**: Define multiple function signatures.
    ```typescript
    function pickCard(x: number): any;
    function pickCard(x: number[]): any;
    function pickCard(x: any): any {
        // Implementation
    }
    ```

---

## 03-Interfaces

* **Defining Interfaces**:
    ```typescript
    interface Person {
        firstName: string;
        lastName: string;
        age?: number; // Optional property
        readonly id: string; // Read-only property
    }

    let user: Person = { firstName: "John", lastName: "Doe", id: "123" };
    ```
* **Extending Interfaces**:
    ```typescript
    interface Employee extends Person {
        employeeId: number;
        department: string;
    }

    let emp: Employee = {
        firstName: "Jane",
        lastName: "Smith",
        id: "456",
        employeeId: 101,
        department: "HR"
    };
    ```

---

## 04-Type Alias

* **Creating Type Aliases**:
    ```typescript
    type MyString = string;
    type ID = string | number;
    type Point = { x: number; y: number; };
    type Greeter = (name: string) => string;

    let myName: MyString = "Alice";
    let userId: ID = 123;
    let coord: Point = { x: 10, y: 20 };
    ```

---

## 05-Tuples

* **Defining Tuples**: Fixed number of elements, each with a known type.
    ```typescript
    let x: [string, number];
    x = ["hello", 10]; // OK
    // x = [10, "hello"]; // Error

    let rgb: [number, number, number] = [255, 0, 0];
    ```

---

## 06-Classes (OOP)

* **Class Definition**:
    ```typescript
    class Animal {
        name: string; // Public by default

        constructor(theName: string) {
            this.name = theName;
        }

        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    let dog = new Animal("Buddy");
    dog.move(5);
    ```

---

## 07-Constructors

* **Constructor Basics**: Special method called when an object is created.
    ```typescript
    class Car {
        make: string;
        model: string;

        constructor(make: string, model: string) {
            this.make = make;
            this.model = model;
        }
    }
    ```
* **Parameter Properties**: Shorthand for declaring and initializing properties.
    ```typescript
    class CarWithShorthand {
        constructor(public make: string, public model: string) {
            // No need to explicitly declare make and model or assign them
        }
    }
    ```

---

## 08-Static Methods

* **Static Properties and Methods**: Belong to the class itself, not instances.
    ```typescript
    class Calculator {
        static PI: number = 3.14159;

        static add(x: number, y: number): number {
            return x + y;
        }
    }

    console.log(Calculator.PI);
    console.log(Calculator.add(5, 3));
    ```

---

## 09-Access Modifiers

* **`public`**: Accessible from anywhere (default).
* **`private`**: Accessible only within the declaring class.
* **`protected`**: Accessible within the declaring class and its subclasses.

    ```typescript
    class Parent {
        public publicProp: string = "I am public";
        private privateProp: string = "I am private";
        protected protectedProp: string = "I am protected";

        getPrivateProp() {
            return this.privateProp;
        }
    }

    class Child extends Parent {
        getProtectedProp() {
            return this.protectedProp; // Accessible
        }
        // getPrivatePropFromChild() { return this.privateProp; } // Error
    }

    let p = new Parent();
    console.log(p.publicProp);
    // console.log(p.privateProp); // Error
    // console.log(p.protectedProp); // Error
    ```

---

## 10-Inheritance

* **`extends` Keyword**: A class can inherit from another class.
* **Method Overriding**: Subclass provides its own implementation of a method from its superclass. Use `super()` to call the parent's method.

    ```typescript
    class Vehicle {
        constructor(public speed: number) {}
        move() {
            console.log(`Moving at ${this.speed} km/h`);
        }
    }

    class Bicycle extends Vehicle {
        constructor(speed: number, public gears: number) {
            super(speed); // Call parent constructor
        }
        move() {
            super.move(); // Call parent move method
            console.log(`Pedaling with ${this.gears} gears.`);
        }
    }

    let bike = new Bicycle(20, 7);
    bike.move();
    ```

---

## 11-Method Overloading (Function Overloading)

* TypeScript supports function overloading by defining multiple function signatures, followed by a single implementation that handles all cases.
    ```typescript
    function greetUser(name: string): string;
    function greetUser(age: number): string;
    function greetUser(nameOrAge: string | number): string {
        if (typeof nameOrAge === "string") {
            return `Hello, ${nameOrAge}!`;
        } else {
            return `You are ${nameOrAge} years old.`;
        }
    }

    console.log(greetUser("Alice"));
    console.log(greetUser(30));
    ```

---

## 12-Method Overriding

* See **10-Inheritance** for examples of method overriding using `super()`.

---

## 13-Maps

* **`Map` Object**: A collection of key-value pairs. Keys can be of any type.
    ```typescript
    let myMap = new Map<string, number>();
    myMap.set("apple", 1);
    myMap.set("banana", 2);

    console.log(myMap.get("apple")); // 1
    console.log(myMap.has("banana")); // true
    myMap.delete("apple");
    console.log(myMap.size); // 1

    for (let [key, value] of myMap) {
        console.log(`${key}: ${value}`);
    }
    ```

---

## 14-String Methods

* **Common String Methods**:
    ```typescript
    let message: string = "Hello TypeScript";

    console.log(message.length); // 16
    console.log(message.toUpperCase()); // "HELLO TYPESCRIPT"
    console.log(message.toLowerCase()); // "hello typescript"
    console.log(message.substring(0, 5)); // "Hello"
    console.log(message.indexOf("Type")); // 6
    console.log(message.includes("Script")); // true
    console.log(message.replace("Type", "Java")); // "Hello JavaScript"
    ```

---

## 15-Arrays

* **Array Types**:
    ```typescript
    let numbers: number[] = [1, 2, 3];
    let names: Array<string> = ["Alice", "Bob"];
    ```
* **Common Array Methods**:
    ```typescript
    let fruits: string[] = ["apple", "banana"];
    fruits.push("cherry"); // ["apple", "banana", "cherry"]
    fruits.pop(); // "cherry", fruits is ["apple", "banana"]

    let doubled = numbers.map(n => n * 2); // [2, 4, 6]
    let evens = numbers.filter(n => n % 2 === 0); // [2]
    let sum = numbers.reduce((acc, n) => acc + n, 0); // 6
    ```

---

## 16-Generics

* **Type Variables**: Allow components to work with any data type while providing type safety.
    ```typescript
    function identity<T>(arg: T): T {
        return arg;
    }

    let output1 = identity<string>("myString"); // type of output1 is string
    let output2 = identity<number>(100);     // type of output2 is number
    ```
* **Generic Interfaces**:
    ```typescript
    interface GenericIdentityFn<T> {
        (arg: T): T;
    }
    let myIdentity: GenericIdentityFn<number> = identity;
    ```
* **Generic Classes**:
    ```typescript
    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x, y) { return x + y; };
    ```

---

## 17-Enum

* **Numeric Enums**: Default starting from 0.
    ```typescript
    enum Direction {
        Up,    // 0
        Down,  // 1
        Left,  // 2
        Right  // 3
    }
    let go: Direction = Direction.Up;
    console.log(go); // 0
    console.log(Direction[0]); // "Up"
    ```
* **String Enums**: Provide better readability at runtime.
    ```typescript
    enum Status {
        Success = "SUCCESS",
        Failure = "FAILURE",
        Pending = "PENDING"
    }
    let currentStatus: Status = Status.Success;
    console.log(currentStatus); // "SUCCESS"
    ```

---

## 18-Union Types

* **Combining Types with `|`**: A value can be one of several types.
    ```typescript
    function printId(id: number | string) {
        console.log(`Your ID is: ${id}`);
    }
    printId(101);
    printId("202");
    // printId(true); // Error
    ```
* **Narrowing Union Types**: Using `typeof` or other checks.
    ```typescript
    function printIdNarrowed(id: number | string) {
        if (typeof id === "string") {
            console.log(id.toUpperCase());
        } else {
            console.log(id.toFixed(2));
        }
    }
    ```

---

## 19-Import and Export (ES Modules)

* **Exporting**:
    ```typescript
    // math.ts
    export const PI = 3.14;
    export function add(a: number, b: number): number {
        return a + b;
    }
    export class Calculator { /* ... */ }
    export default function multiply(a: number, b: number): number {
        return a * b;
    }
    ```
* **Importing**:
    ```typescript
    // main.ts
    import { PI, add } from './math'; // Named imports
    import MyCalc from './math';      // Default import (can be renamed)
    import * as MathUtils from './math'; // Import all as an object

    console.log(PI);
    console.log(add(2, 3));
    console.log(MathUtils.PI);
    console.log(MyCalc(4, 5));
    ```

---

## 20-Destructuring and Spread

* **Array Destructuring**:
    ```typescript
    let [first, second] = [1, 2];
    let [, , third] = [1, 2, 3]; // Skip elements
    ```
* **Object Destructuring**:
    ```typescript
    let person = { name: "Alice", age: 30 };
    let { name, age } = person;
    let { name: userName } = person; // Rename
    ```
* **Spread Operator (`...`)**:
    * **Array Spreading**:
        ```typescript
        let arr1 = [1, 2];
        let arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
        ```
    * **Object Spreading**:
        ```typescript
        let obj1 = { a: 1, b: 2 };
        let obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
        let obj3 = { ...obj1, b: 20 }; // { a: 1, b: 20 } (overwrites)
        ```

---

## 21-Async/Await

* **Asynchronous Programming**: Simplifies working with Promises.
    ```typescript
    async function fetchData(): Promise<string> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Data fetched!");
            }, 1000);
        });
    }

    async function processData() {
        try {
            console.log("Fetching data...");
            const data = await fetchData(); // Await the Promise resolution
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    processData();
    ```

---

## 22-`keyof` and `typeof`

* **`keyof` Operator**: Creates a union type of all property names (string literals) of an object type.
    ```typescript
    interface User {
        name: string;
        age: number;
    }
    type UserKeys = keyof User; // "name" | "age"

    function getProperty<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }
    let myUser: User = { name: "Bob", age: 40 };
    console.log(getProperty(myUser, "name")); // "Bob"
    ```
* **`typeof` Operator**: Infers the type of a variable or property at compile time.
    ```typescript
    let s = "hello";
    type SType = typeof s; // type SType = string

    let userObj = { name: "Alice", id: 1 };
    type UserObjType = typeof userObj; // type UserObjType = { name: string; id: number; }
    ```

---

## 23-Intersection Types

* **Combining Types with `&`**: Creates a new type by combining multiple existing types. The new type has all members of the combined types.
    ```typescript
    interface HasName {
        name: string;
    }
    interface HasAge {
        age: number;
    }

    type PersonInfo = HasName & HasAge;

    let personDetail: PersonInfo = { name: "Charlie", age: 25 };
    // let invalidPerson: PersonInfo = { name: "David" }; // Error: Property 'age' is missing
    ```

---

## 24-Discriminated Unions

* **Pattern for Type Narrowing**: Useful for working with union types where one property (the "discriminant") helps TypeScript narrow down the specific type.
    ```typescript
    interface Circle {
        kind: "circle";
        radius: number;
    }

    interface Square {
        kind: "square";
        sideLength: number;
    }

    type Shape = Circle | Square;

    function getArea(shape: Shape): number {
        switch (shape.kind) {
            case "circle":
                return Math.PI * shape.radius ** 2;
            case "square":
                return shape.sideLength ** 2;
        }
    }

    let myCircle: Circle = { kind: "circle", radius: 10 };
    let mySquare: Square = { kind: "square", sideLength: 5 };
    console.log(getArea(myCircle));
    console.log(getArea(mySquare));
    ```

---

## 25-`this` Keyword

* **Context of `this`**: `this` refers to the object that is currently executing the code. Its value depends on how the function is called.
    * **Method call**: `this` refers to the object the method is called on.
    * **Simple function call**: `this` is `undefined` in strict mode, `window` (global object) in non-strict mode.
    * **Arrow functions**: `this` is lexically scoped (inherits `this` from the enclosing scope).
    ```typescript
    class MyClass {
        name: string = "MyClass";

        logName() {
            console.log(this.name);
        }

        logNameArrow = () => {
            console.log(this.name); // 'this' is lexically bound to MyClass instance
        }
    }

    let obj = new MyClass();
    obj.logName(); // "MyClass"

    let unboundLog = obj.logName;
    // unboundLog(); // Error in strict mode (this is undefined)

    let boundLogArrow = obj.logNameArrow;
    boundLogArrow(); // "MyClass" (works due to arrow function's lexical 'this')
    ```
* **`this` parameters**: Explicitly type `this` in function signatures.
    ```typescript
    interface Card {
        suit: string;
        card: number;
    }
    interface Deck {
        suits: string[];
        cards: number[];
        createCardPicker(this: Deck): () => Card; // 'this' must be a Deck
    }

    let deck: Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function(this: Deck) {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();
    console.log(pickedCard);
    ```

---

## 26-Narrowing (`in` operator, `typeof`, `instanceof`)

* **Type Narrowing**: Process of refining types to more specific ones.
    * **`typeof`**: For primitive types (`string`, `number`, `boolean`, `symbol`, `bigint`, `undefined`, `object`, `function`).
        ```typescript
        function padLeft(padding: number | string, input: string) {
            if (typeof padding === "number") {
                return " ".repeat(padding) + input;
            }
            return padding + input;
        }
        ```
    * **`instanceof`**: For classes.
        ```typescript
        class Dog { bark() { console.log("Woof!"); } }
        class Cat { meow() { console.log("Meow!"); } }

        function animalSound(animal: Dog | Cat) {
            if (animal instanceof Dog) {
                animal.bark();
            } else {
                animal.meow();
            }
        }
        ```
    * **`in` operator**: Checks if an object has a property with a given name.
        ```typescript
        interface Fish { swim(): void; }
        interface Bird { fly(): void; }

        function move(animal: Fish | Bird) {
            if ("swim" in animal) {
                animal.swim();
            } else {
                animal.fly();
            }
        }
        ```
    * **Truthiness Narrowing**: Checks for `null`, `undefined`, `0`, `""`, `false`.
        ```typescript
        function printAll(strs: string | string[] | null) {
            if (strs && typeof strs === "object") {
                for (const s of strs) {
                    console.log(s);
                }
            } else if (typeof strs === "string") {
                console.log(strs);
            }
        }
        ```

---

## 27-`tsconfig.json` Settings

* **Key Compiler Options**:
    * `"target"`: Specifies ECMAScript target version (e.g., `"ES2020"`).
    * `"module"`: Specifies module code generation (e.g., `"CommonJS"`, `"ESNext"`).
    * `"rootDir"`: Specifies the root directory of input files.
    * `"outDir"`: Specifies the output directory for compiled JavaScript.
    * `"strict"`: Enables all strict type-checking options (highly recommended).
    * `"noImplicitAny"`: Raise error on expressions and declarations with an implied `any` type.
    * `"strictNullChecks"`: When `true`, `null` and `undefined` are not assignable to anything but themselves and `unknown`.
    * `"esModuleInterop"`: Enables `__esModule` interop for `import * as` from CommonJS modules.
    * `"forceConsistentCasingInFileNames"`: Disallow inconsistently-cased references to the same file.
    * `"skipLibCheck"`: Skip type checking of all declaration files (`*.d.ts`).

    ```json
    {
      "compilerOptions": {
        "target": "ES2020",
        "module": "CommonJS",
        "rootDir": "./src",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "skipLibCheck": true
      },
      "include": [
        "src/**/*.ts"
      ],
      "exclude": [
        "node_modules"
      ]
    }
    ```
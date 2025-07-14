# 12 - Method Overriding in TypeScript

## ✅ Objective

Learn how to override methods from a parent class in a child class to customize behavior.

---

## 📘 What Is Method Overriding?

- Allows child class to **redefine** a method from its parent class
- Both methods must have **same name** and **compatible signature**
- TypeScript ensures that overridden method matches base type

---

## ✅ Example

```ts
class Animal {
  makeSound(): void {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

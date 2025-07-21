# 25 - `this` Keyword in TypeScript

## 🎯 Objective

Understand how the `this` keyword works in TypeScript, and how it behaves in different contexts like:
- Classes
- Arrow Functions vs Regular Functions
- Interfaces
- Callbacks (`setTimeout`, `map`, etc.)

---

## 🧠 What is `this`?

The `this` keyword refers to the **object that is currently calling the function or method**.

Its value depends on **how and where** the function is invoked.

---

## ✅ 1. `this` in a Class

```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p = new Person("Rajat");
p.greet(); // Hello, my name is Rajat

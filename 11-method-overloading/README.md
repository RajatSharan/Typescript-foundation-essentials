# 11 - Method Overloading in TypeScript

## ✅ Objective

Learn how TypeScript supports method overloading using **multiple function signatures** with a **single implementation**, allowing flexibility in function usage with strict type safety.

---

## 🧠 What Is Method Overloading?

Method overloading means:
- You can define **multiple function signatures** with the same name
- Each signature can have different **parameter types or counts**
- ✅ Only **one implementation** is allowed, and it must handle all overload cases

> ⚠️ TypeScript simulates overloading because JavaScript doesn’t support it natively

---

## 📌 Syntax: Overload Signatures + Single Implementation

```ts
// Overload signatures
function greet(name: string): string;
function greet(age: number): string;

// Implementation
function greet(value: string | number): string {
  if (typeof value === "string") {
    return `Hello, ${value}!`;
  } else {
    return `You are ${value} years old.`;
  }
}


🧠  Key Rules to Remember
Declare overload signatures first

Write one combined function implementation

Use typeof, instanceof, or custom logic to branch between types

TypeScript will enforce that only valid overloads are used


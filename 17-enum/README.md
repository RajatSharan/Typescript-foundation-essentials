# 17 - Enums in TypeScript

## ✅ Objective

Understand how to use **Enums** in TypeScript to define a set of named constants — for better readability, consistency, and type safety.

---

## 🧠 What is an Enum?

An `enum` (short for **enumeration**) allows you to define a set of named values that can be **numeric** or **string-based**.

Enums are useful for:
- Avoiding magic numbers/strings
- Enforcing consistent values across your codebase
- Improving readability in condition checks, roles, states, etc.

---

## 🔢 1. Numeric Enum (Default Behavior)

```ts
enum Direction {
  North,   // 0
  East,    // 1
  South,   // 2
  West     // 3
}

console.log(Direction.North); // 0
console.log(Direction.West);  // 3

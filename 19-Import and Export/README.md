# 19 - Import & Export in TypeScript

## ✅ Objective

Learn how to **modularize code** in TypeScript using `export` and `import`. This makes your code **reusable, readable, and scalable**.

---

## 🧠 Why Use Modules?

- Split logic into multiple files
- Avoid repeating code
- Keep files short and focused
- Reuse utility functions, constants, classes, types across your app

---

## ✅ 1. Named Export

You can export multiple items by name from one file:

### 📁 `utils.ts`

```ts
export const PI = 3.14;

export function add(a: number, b: number): number {
  return a + b;
}

# 08 - Static Methods in TypeScript

## ✅ Objective

Understand and practice how static methods work in TypeScript classes.

---

## 📘 What is a Static Method?

A static method:
- Belongs to the **class itself**, not to instances (objects).
- Is called using `ClassName.methodName()` instead of `object.methodName()`.

```ts
class MathUtil {
  static square(x: number): number {
    return x * x;
  }
}

console.log(MathUtil.square(5)); // 25 ✅

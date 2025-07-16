# 16 - Generics in TypeScript

## ✅ Objective

Learn how to write reusable, type-safe functions and interfaces using **generics** in TypeScript.  
Generics help you avoid duplicating code for different types while keeping strict type checking.

---

## 📌 What is a Generic?

A **generic** is like a variable for types. It allows you to write functions, interfaces, or classes that work with **any data type**, without losing type safety.

Instead of:

```ts
function getFirstString(arr: string[]): string
function getFirstNumber(arr: number[]): number

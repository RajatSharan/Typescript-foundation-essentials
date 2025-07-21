# 26 - Narrowing using `in` Operator in TypeScript

## 🎯 Goal

Understand how to use the `in` operator to narrow types in TypeScript when working with union types.

---

## 🧠 What is Narrowing?

**Narrowing** means helping TypeScript figure out the exact type from a union of multiple types.

---

## 🔍 What is the `in` Operator?

The `in` operator checks if a **property exists in an object**.

It’s often used when you're dealing with **union types** that have **different properties**.

---

## ✅ Example 1: User vs Admin

```ts
type User = {
  username: string;
};

type Admin = {
  username: string;
  isAdmin: boolean;
};

function checkUser(user: User | Admin) {
  if ("isAdmin" in user) {
    console.log(`${user.username} is an Admin`);
  } else {
    console.log(`${user.username} is a regular User`);
  }
}

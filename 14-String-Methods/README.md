# 14 - Working with Strings in TypeScript

## ✅ Objective

Understand how to create and manipulate strings in TypeScript using commonly used built-in methods.

---

## ✍️ Declaring a String

```ts
let str: string = "Playwright";


let text: string = "  Playwright test ";
console.log(text.length);                    // 20
console.log(text.trim());                    // "Playwright test"
console.log(text.toUpperCase());             // "  PLAYWRIGHT TEST "
console.log(text.includes("test"));          // true
console.log(text.replace("test", "run"));    // "  Playwright run "
console.log(text.substring(2, 12));          // "Playwright"
console.log(text.replaceAll(" ", "-"));      // "--Playwright-test-"

let sentence = "This is a test";
console.log(sentence.split(" "));            // ["This", "is", "a", "test"]

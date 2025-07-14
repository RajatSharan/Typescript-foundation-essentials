# 13 - Working with Maps in TypeScript

## ✅ Objective

Understand how to use the `Map` object in TypeScript for storing and managing key-value pairs efficiently with proper type safety.

---

## 🔍 What is a Map?

A `Map` is a built-in TypeScript (JavaScript) object that allows you to store key-value pairs, where:
- Keys can be **any type**
- Insertion order is **preserved**
- Ideal for storing dynamic structured data

---

## ✨ Syntax

```ts
const creds = new Map<string, string>();

`
## 📌 Map Methods in TypeScript

Here are the most commonly used methods and properties available on `Map` objects in TypeScript:

| Method            | Description                                                    | Example                                    |
| ----------------- | -------------------------------------------------------------- | ------------------------------------------ |
| `set(key, value)` | Adds or updates a key-value pair                               | `map.set("name", "Rajat")`                 |
| `get(key)`        | Returns the value for the given key                            | `map.get("name") // "Rajat"`               |
| `has(key)`        | Returns `true` if the key exists                               | `map.has("name") // true`                  |
| `delete(key)`     | Deletes the key-value pair                                     | `map.delete("name")`                       |
| `clear()`         | Removes all entries from the map                               | `map.clear()`                              |
| `size`            | Returns number of entries in the map                           | `map.size // 0, 1, 2...`                    |
| `keys()`          | Returns an iterator for all keys                               | `for (const k of map.keys()) {}`           |
| `values()`        | Returns an iterator for all values                             | `for (const v of map.values()) {}`         |
| `entries()`       | Returns an iterator of `[key, value]` pairs                    | `for (const [k, v] of map.entries()) {}`   |
| `forEach(cb)`     | Executes a callback for each key-value pair in insertion order | `map.forEach((v, k) => console.log(k, v))` |

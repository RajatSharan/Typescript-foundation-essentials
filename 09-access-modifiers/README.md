# 09 - Access Modifiers in TypeScript

## ✅ Objective

Learn how access modifiers work in TypeScript classes:
- `public`, `private`, `protected`, and `readonly`

---

## 📘 Access Modifiers Overview

| Modifier   | Accessible in Class | Subclass | Outside the Class |
|------------|---------------------|----------|--------------------|
| `public`   | ✅                  | ✅       | ✅                |
| `private`  | ✅                  | ❌       | ❌                |
| `protected`| ✅                  | ✅       | ❌                |
| `readonly` | ✅ (read only)      | ✅       | ✅                |

---

## 🧪 Examples Covered

- Public property and method
- Private method (cannot be called outside)
- Protected property accessed in a subclass
- Readonly field set only once (in constructor)

---

## 🛠️ How to Run

```bash
npx ts-node access-modifiers-demo.ts

# 27 - Understanding `tsconfig.json` in TypeScript

## 🎯 What is `tsconfig.json`?

The `tsconfig.json` file is the configuration file for the TypeScript compiler. It defines:

- Which files to compile
- How strict the type checking should be
- Where compiled JavaScript files go
- Project structure and import behavior

You can create it using:

```bash
tsc --init


function greet(name: string) {
  console.log("Hello", name);
}

2️⃣ "noUnusedLocals": true
Throws an error if local variables are declared but never used.

function test() {
  let x = 10; // ❌ Error: 'x' is declared but never used
}

3️⃣ "noUnusedParameters": true
Throws an error if function parameters are declared but never used.

function sayHello(name: string) {
  console.log("Hello");
  // ❌ Error: 'name' is declared but never used
}


4️⃣ "forceConsistentCasingInFileNames": true
Prevents mismatched file casing between import paths and actual files.

// File is utils.ts
import { helper } from './Utils'; // ❌ Error on Linux/macOS

✔️ Correct:
import { helper } from './utils'; // ✅


5️⃣ "baseUrl" and "paths"
Simplifies import paths using absolute path configuration.

"baseUrl": "./src",
"paths": {
  "@utils/*": ["utils/*"]
}


✅ Now you can write:
import { helper } from "@utils/helper";

Instead of:
import { helper } from "../../utils/helper";


6️⃣ "rootDir" and "outDir"
Controls the source and output structure.

📌 In tsconfig.json:
"rootDir": "./src",
"outDir": "./dist"
src/              <-- rootDir
├── index.ts
dist/             <-- outDir
├── index.js      <-- compiled output


7️⃣ "target"
Defines the JavaScript version TypeScript should compile to.

Common values:

"ES5" – For older browsers

"ES6" / "ES2015" – Modern support

"ES2020" or "ESNext" – Latest features

"target": "ES2020"


8️⃣ "lib"
Specifies which built-in JavaScript libraries to include in the compilation.

"lib": ["ES2020", "DOM"]


✅ Use cases:

"DOM" – For web APIs

"ES2020" – For latest language features

9️⃣ "include" and "exclude"
Control which files should be compiled or ignored.

"include": ["src/**/*"],
"exclude": ["node_modules", "dist"]


✅ This setup:

Compiles all .ts files in src/

Skips node_modules and dist/


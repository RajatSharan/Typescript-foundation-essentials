## Step 1: Create a new project folder 
 
mkdir my-ts-project cd my-ts-project 
 
 
## Step 2: Initialize a new Node.js project 
 
npm init -y 
 
This creates a basic package.json file. 
 
## Step 3: Install TypeScript and ts-node 
 
npm install --save-dev typescript ts-node @types/node 
 
 
## Step 4: Create a tsconfig.json file 
 
npx tsc --init 
 
Or create it manually with this content: 
 
{ 
  "compilerOptions": { 
    "target": "es2016", 
    "module": "commonjs", 
    "esModuleInterop": true, 
    "forceConsistentCasingInFileNames": true, 
    "strict": true, 
    "skipLibCheck": true, 
    "outDir": "./dist" 
  } 
} 
 
 
## Step 5: Add scripts to package.json Open package.json and add these scripts: 
 
"scripts": { 
  "start": "ts-node index.ts", 
  "build": "tsc" 
} 
 
 
## Step 6: Create a TypeScript file Create a file named index.ts: 
 
// index.ts function greet(name: string): string {   return `Hello, ${name}!`; 
} 
 
console.log(greet("TypeScript")); 
 
 
## Step 7: Run your TypeScript file 
 
npx ts-node index.ts 
 
Or using the npm script: 
 
npm start 

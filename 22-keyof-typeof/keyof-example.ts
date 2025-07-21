// const colour ={

//       primary: "#3498db",
//   secondary: "#2ecc71",
//   danger: "#e74c3c"

// }

// type colourNames =keyof typeof colour

// function getColor(name:colourNames){
//     return colour[name]
// }

// console.log(getColor("primary"));


type Persons = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // "name" | "age"

let key: PersonKeys;



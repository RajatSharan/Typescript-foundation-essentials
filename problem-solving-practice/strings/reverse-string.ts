/*Problem 1: Reverse a String
Problem Description: Write a TypeScript 
function that takes a string as input and 
returns the string reversed. Do not use built-in reverse() 
method for strings (as strings are immutable, it doesn't exist 
directly for strings anyway, but avoid array reverse() after converting).*/

//Expected Input and Output Examples:
//Input: "hello"
//Output: "olleh"

function reverseString(str:string):string{

    let output = ""
    for(let i=str.length-1;i>=0;i--){

        output+=str[i]

    }
    return output

}


console.log(reverseString("Hello"))


/*Problem 2: Count Vowels and Consonants
Problem Description: Create a TypeScript function that accepts a string and returns an object containing the count of vowels (a, e, i, o, u, case-insensitive) and consonants in the string. Ignore spaces and special characters*/


/*Input: "Hello World"

Output: { vowels: 3, consonants: 7 } (Vowels: e, o, o; Consonants: H, l, l, W, r, l, d)*/


function countVowelsandConsonats(str1:string):{vowels:number,consonants:number}{

    str1 = str1.toLowerCase()

    const vowellist = ["a","e","i","o","u"]

     let vowels= 0
    let consonants =0

    for(let i=0;i<str1.length;i++){

        const char = str1[i]

        if(char>='a' && char<='z'){
            if(vowellist.includes(char)){
                vowels++
            }
            else{
                consonants++
            }
        }

    }
     return {vowels,consonants}
}
// 41 ==> Fix the Error: Check Whether a Given Number Is Odd
//     I've written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Fix the error.

console.log(isOdd(-5))
console.log(isOdd(25))
console.log(isOdd(0))

// // answer:
function isOdd(num){
    return (!num%2==0)?true:false
}




// 42 ==> Flip the Boolean
//     Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
//     Create a function that returns the opposite of the given boolean, as a number.

console.log(flipBaloon(true))
console.log(flipBaloon(false))
console.log(flipBaloon(1))
console.log(flipBaloon(0))
console.log(flipBaloon(5))

// //answer:
function flipBaloon(boolean){
    return (!boolean == 0)? false : true
}




// 43 ==> Kinetic Energy
//     Kinetic energy can be calculated with the following formula:
//     Kinetic energy = (0.5) * m * v^2

console.log(kineticEnergy(60,3))
console.log(kineticEnergy(45,10))
console.log(kineticEnergy(63.5,7.35))

// // answer:
function kineticEnergy(m,v){
    return (0.5) * m * v**2
}



// 44 ==> Name Greeting!
// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".

// answer:
let fun = (a) => a;

console.log(fun("Gerald"))
console.log(fun("Tiffany"))
console.log(fun("Ed"))




// 45 ==> To the Power of _____
//     Create a function that takes a base number and an exponent number and returns the calculation.
console.log(calculteExponent(5, 5))
console.log(calculteExponent(10, 10))
console.log(calculteExponent(3, 3))

// // answer:
function calculteExponent(a,b){
    return a**b
}



// 46 ==> Word without First Character
//     Create a function that takes a word and returns the new word without including the first character.

console.log(newWord("apple"))
console.log(newWord("cherry"))
console.log(newWord("plum"))

// answer:
function newWord(string){
    return string.slice(1)
}





// 47 ==> Concatenating Two neger Arrays
//     Create a function to concatenate two integer arrays.

console.log(concat([1, 3, 5], [2, 6, 8]))
console.log(concat([7, 8], [10, 9, 1, 1, 2]))
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]))

// // answer:
function concat(arr1,arr2){
    let newArr = []
    return newArr.concat(...arr1,...arr2)
}



// this is in dout 

// 48 ==> Find the Index (Part 1)
//     Create a function that finds the index of a given item. If the item is not present, return -1.

console.log(search([1, 5, 3], 5))
console.log(search([9, 8, 3], 3))
console.log(search([1, 2, 3], 4))
console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"))
console.log(search(""))

// answer
function search(data,have){
    return data.indexOf(have)
}




// 49 ==> Number of Stickers
//     Given an n * n * n Rubik's cube, return the number of individual stickers that are needed to cover the whole cube. Keep in mind there are 6 faces to keep track of.

console.log(howManyStickers(1))
console.log(howManyStickers(2))
console.log(howManyStickers(3))

// answer:
function howManyStickers(n){
    return 6*n*n*n
}




// 50 ==> Check if an Array Contains a Given Number
//     Write a function to check if an array contains a particular number.

console.log(check([1, 2, 3, 4, 5], 3))
console.log(check([1, 1, 2, 1, 1], 3))
console.log(check([5, 5, 5, 6], 5))
console.log(check([], 5))
console.log(check([1,4,2,5,7,467],467))


// kisi content me koi chij hai ya nhi hai ise dekhne ke liye hum .includes use me lete hai ye boolean value true ya false return karta hai
// answer:
function check(arr,have){
    return arr.includes(have)
}





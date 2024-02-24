// 31 ==> Movie Theatre Admittance
//     Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//         The person is at least 15 years old.
//         They have parental supervision.
//     The function accepts two parameters, age and isSupervised. Return a boolean.
console.log(acceptIntoMovie(14, true))
console.log(acceptIntoMovie(14, false))
console.log(acceptIntoMovie(16, false))

// answer:
function acceptIntoMovie(age,isSupervised){
    return ((age>=15 == true)==isSupervised) ?true:false
}




// 32 ==> Evaluate an Equation
//     Create a function that evaluates an equation.
console.log(eq("1+2"))
console.log(eq("6/(9-7)"))
console.log(eq("3+2-4"))

// answer:
function eq(string){
    return eval(string)
}



// 33 ==> Concatenate First and Last Name into One String
//     Given two strings, firstName and lastName, return a single string in the format "last, first".
console.log(concatName("First", "Last"))
console.log(concatName("John", "Doe"))
console.log(concatName("Mary", "Jane"))

// answer:
function concatName(firstName,lastName){
    return firstName.concat(lastName)
}




// 34 ==> On/Off Switches
// Create a function that returns how many possible outcomes can come from a certain number of switches (on / off).
//  posCom(1) ➞ 2
//  posCom(3) ➞ 8
//  posCom(10) ➞ 1024
console.log(posCom(1));
console.log(posCom(3));
console.log(posCom(10));

// answer:
function posCom(a){
    return 2**a
}



// 35 ==> Triangle and Parallelogram Area Finder
//     Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
console.log(areaShape(2, 3, "triangle"))
console.log(areaShape(8, 6, "parallelogram"))
console.log(areaShape(2.9, 1.3, "parallelogram"))

// answer:
function areaShape(base,height,shape){
    return `${base*height} ${shape}`
}



// 36 ==> Reverse an Array
//     Write a function to reverse an array.
console.log(reverse([1, 2, 3, 4]))
console.log(reverse([9, 9, 2, 3, 4]))

// answer:
function reverse(arr){
        return arr.reverse()
}




// 37 ==> ES6: Destructuring Arrays I
//     You can assign variables from arrays like this:
//         const arr = [1, 2, 3, 4, 5, 6]
//         let a = arr[0]
//         let b = arr[1]
//         console.log(a) // outputs 1
//         console.log(b) // outputs 2
//     With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax
// es6([1, 2, 3, 4, 5, 6])

answer:
let arr = [1,2,3,4,5,6]
console.log(arr)
let [a,b,c,d,e,f]= arr
console.log(a)
console.log(b)



// 38 ==> Using Ternary Operators
//     Write a function that uses the ternary operator to return "yeah" if the condition is true, and "nope" otherwise.
console.log(yeah_nope(true))
console.log(yeah_nope(false))

// answer:
function yeah_nope(boolean){
    return (boolean==true)?"yeah":"nope"
}



// 39 ==> Convert an Array to a String
//     Create a function that takes an array of numbers or letters and returns a string.
console.log(arrayToString([1, 2, 3, 4, 5, 6]))
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]))
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))

answer:
function arrayToString(arr){
    return String(arr)
}




// 40 ==> Return the Last Element in an Array
//     Create a function that accepts an array and returns the last item in the array.
console.log(getLastItem([1, 2, 3]))
console.log(getLastItem(["cat", "dog", "duck"]))
console.log(getLastItem([true, false, true]))

// answer:
function getLastItem(arr){
    let lastIndex = arr.length-1;
    return arr[lastIndex]
}

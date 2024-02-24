// this whole file in dout maybe leter to understand all of thing



// 61 ==> ES6: Destructuring Objects III
//         const obj =  { two : 2 }
//         var { one, two } = obj
//         console.log(one) // outputs undefined
//     Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).

// answer:
const obj = {two:2}
var {one = 1 ,two} = obj
console.log(one)




// 62 ==> Default Mood
//     Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
//         moodToday("happy") ➞ "Today, I am feeling happy"
//         moodToday("sad") ➞ "Today, I am feeling sad"
//         moodToday() ➞ "Today, I am feeling neutral"

// answer:
function moodToday(mood = "neutral"){
    return console.log(`"Today I am feeling ${mood}"`)
}
moodToday("happy")
moodToday("sad")
moodToday()




// 63) ==> Similar Bread
//     Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
//     The lists will always be three elements long. The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.
//         hasSameBread(
//             ["white bread", "lettuce", "white bread"],
//             ["white bread", "tomato", "white bread"]
//         ) ➞ true
//         hasSameBread(
//             ["brown bread", "chicken", "brown bread"],
//             ["white bread", "chicken", "white bread"]
//         ) ➞ false
//         hasSameBread(
//             ["toast", "cheese", "toast"],
//             ["brown bread", "cheese", "toast"]
//         ) ➞ false

// answer:
function hasSameBread(arr1,arr2){
    let lastBreadArr1 = arr1.length-1;
    let lastBreadArr2 = arr2.length-1;
    return console.log((arr1[0] == arr2[0] && arr1[lastBreadArr1] == arr2[lastBreadArr2])? true : false)
}
hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
)
hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
) 
hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
)




// 64 ==> Shapes With N Sides
//     Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
//         Inputs   Outputs
//         1        "circle"
//         2        "semi-circle"
//         3        "triangle"
//         4        "square"
//         5        "pentagon"
//         6        "hexagon"
//         7        "heptagon"
//         8        "octagon"
//         9        "nonagon"
//         10       "decagon"
//         nSidedShape(3) ➞ "triangle"
//         nSidedShape(1) ➞ "circle"
//         nSidedShape(9) ➞ "nonagon"
//     There won't be any tests with a number below 1 or greater than 10.
//     Return the output in lowercase.
//     The challenge is intended to be completed without conditionals (it would take too long)!

// answer:
function nSidedShape(sides){
    let shape = ["circle","semi-circel","triangle","square","pentagon","hexagon","heptagon","octagon","nonagon","decagon"]
    return console.log(shape[sides-1])
    // side=5 shape[sides-1] => shape[4]=>square 
}

nSidedShape(3)
nSidedShape(1)
nSidedShape(9)





// 65 ==> Multiply Every Array Item by Two
//     Create a function that takes an array with numbers and return an array with the elements multiplied by two.
//         getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]
//         getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]
//         getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]

// answer:

let arr = [1,2,3,4,5]
console.log(arr.map(arrItem => arrItem*arrItem))

function getMultipliedArr(arr){
    return console.log(arr.map(arrItem => arrItem*2))
}

getMultipliedArr([2, 5, 3])
getMultipliedArr([1, 86, -5])
getMultipliedArr([5, 382, 0])





// 66 ==> Burrrrrrrp
//     Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
//         longBurp(3) ➞ "Burrrp"
//         longBurp(5) ➞ "Burrrrrp"
//         longBurp(9) ➞ "Burrrrrrrrrp"

// answer:

var repeatStr = "meekail".repeat(5)
console.log(repeatStr)

function longBurp(brupNum){
    return console.log("bu"+ "r".repeat(brupNum) + "p")
}
longBurp(3)
longBurp(5)
longBurp(9)




// 67 ==> ES6: Destructuring Objects
//     Using basic object destructuring you can assign variables name and email:
//         let { name, email } = { name: "John", email: "john@example.com" }
//         console.log(name)  // "John"
//         console.log(email)  // "john@example.com"
//     What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:
//         let { name, email, rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
//         rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true


// answer:
let {name,email,...rest} = {name:"meekail",email :"john@example.com",city: "Phoenix", state: "AZ", country: "USA" }
console.log(rest.city)





// 68 ==> Char-to-ASCII
//     Create a function that returns the ASCII value of the passed in character.
//         ctoa("A") ➞ 65
//         ctoa("m") ➞ 109
//         ctoa("[") ➞ 91
//         ctoa("\") ➞ 92

// answer:
function ctoa(str){
    return console.log(str.charCodeAt(0))
}
ctoa("A")
ctoa("m")
ctoa("[")
ctoa(`/`)




// 69 ==> Free Coffee Cups
//     For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.
//         totalCups(6) ➞ 7
//         totalCups(12) ➞ 14
//         totalCups(213) ➞ 248

// answer:
function totalCups(num){
    return console.log(Math.floor(num/6)+num)
}
totalCups(6)
totalCups(12)
totalCups(213)

// // additional:
// // question : 4 people eat in one plete and 
// //1) 4 people set on 1 plet and extra go to home
// //2) 4 people set on 1 plet and extra people take 1 more plate
// //3) 4 people set on 1 plet and extra can round figure

function needPlate(people){
    // return console.log(Math.floor(people/4))
    // return console.log(Math.ceil(people/4))
    return console.log(Math.round(people/4))
}
needPlate(5)
needPlate(7)
needPlate(17)






// 70 ==> Array of Word Lengths
//     Create a function that takes an array of words and transforms it into an array of each word's length.
//         wordLengths(["hello", "world"]) ➞ [5, 5]
//         wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]
//         wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]

// answer:

function wordLengths(arr){
    let lengths = arr.map(word => word.length)
    return lengths
}
console.log(wordLengths(["hello", "world"]))
console.log( wordLengths(["Halloween", "Thanksgiving", "Christmas"]))
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]))





// 71 ==> Get the File Name
//     Create a function that returns the selected filename from a path. Include the extension in your answer.
//         getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"
//         getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"
//         getFilename("ffprobe.exe") ➞ "ffprobe.exe"

// answer:

function getFilename(path) {
  var pathArray = path.split(/[\/\\]/);
  var filename = pathArray[pathArray.length - 1];

  return filename;
}


console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt")); 
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3")); 
console.log(getFilename("ffprobe.exe")); 

function getFilename(path){
    let pathArray = path.split(/[\/\\]/)
    let filename = pathArray[pathArray.length-1]
    return console.log(filename)
}

getFilename("C:/Projects/pil_tests/ascii/edabit.txt"); 
getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"); 
getFilename("ffprobe.exe");

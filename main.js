const prompt = require('prompt-sync')({ sigint: true });
console.log('   GGGGGGG   OOOOOOOO   NN    NN   EEEEEEE')
console.log('   GG        OO    OO   NNN   NN   EE')
console.log('   GG        OO    OO   NN NN NN   EEEEEE')
console.log('   GG   GG   OO    OO   NN   NNN   EE')
console.log('   GGGGGGG   OOOOOOOO   NN    NN   EEEEEEE')
console.log("")
console.log("")
console.log('               ┊┊┊┊┊╭╭╭╮╮╮┊┊┊┊ ')
console.log('               ┊┊┊┊┊╰╰╲╱╯╯┊┊┊┊ ')
console.log('               ┊┏╮╭┓╭━━━━━━╮┊┊')
console.log('               ┊╰╮╭╯┃┈┈┈┈┈┈┃┊┊')
console.log('               ┊┊┃╰━╯┈┈╰╯┈┈┃┊┊')
console.log('               ┊┊┃┈┈┈┈┈┈┈╰━┫┊┊')
console.log('               ╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲')
console.log("")
console.log("")
console.log('FFFFF  IIII    SSSS   HH  HH   IIII   NN    NN   GGGGGGG')
console.log('FF      II    SS      HH  HH    II    NNN   NN   GG')
console.log('FFFFF   II    SSSS    HHHHHH    II    NN NN NN   GG')
console.log('FF      II        SS  HH  HH    II    NN   NNN   GG   GG')
console.log('FF     IIII   SSSSS   HH  HH   IIII   NN    NN   GGGGGGG')
console.log("")
console.log("")
console.log("==========================================================")
console.log("==========================================================")
console.log("")
console.log("")

let clearSplash = prompt("           Press any button to CONTINUE.")
console.log("")
console.log("")
console.log("==================================================================================")
console.log("==================================================================================")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("You've gone fishing! Try to maximize the value of your caught fish.")
console.log("")
console.log("")
console.log("You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.")
console.log("")
console.log("")
console.log("==================================================================================")
console.log("==================================================================================")
console.log("")
console.log("")


// Have multiple arrays storing one paramater.
// Examples:
//let arrayColor = ['red', 'blue', 'green', 'black', 'purple' ] --- What type of quotes do I need to use?
//let arrayAdjective = ["scaly", "slimy", "sticky"]
//let arrayType = [tuna, shark, bass, etc..]
//arrayColor[Math.random(arrayColor.length)] --- or assign a variable as Math.Random 


//Create three functions to randomize intergers for each array type.
// function getRandomArbitrary(min, max) {
//  return Math.random() * (max - min) + min;
//}
// All arrays
// Possible Comibnations
let arrColor = ["red ", "blue ", "green ", "yellow ", "purple ", "orange ",]
let arrDescription = ["slimy ", "stinky ", "scaly ", "spikey ", "sandy "]
let arrType = ["bass ", "shark ", "whale ", "tuna ", "mahi "]
let arrWeight = ["1", "2", "3", "4", "5 ", "6"]
let arrValue = ["3.90", "1.10", "5.00", "2.50", "1.50", "9.00", "5.75", "27.00", "100.00"]
// Time

let arrTime = ["6:00am. ", "7:00am. ", "8:00am. ", "9:00am. ", "10:00am. ", "11:00am. ", "12:00pm. "]
// Updated Arrays with stored user input


let arrCaught = []
// END All arrays
//START VARIABLES



//Loop

let arrWeightSum = 0;
let arrValueSum = 0;
let currentTime = "";
let caught = ""

for (let i = 0; i < arrTime.length; i++) { //loop to adjust time. Need to create a pause with a PROMPT and if statements to adjust course.
        let userInput = prompt("Your action: [c]atch or [r]elease? ")


    if (userInput !== "c" && userInput !== "r") {

        currentTime = arrTime[i - 1]
        console.log("Invalid input. Try again. ")
        console.log("Your action: [c]atch or [r]elease? ")

    } else { currentTime = arrTime[i]; }

    console.log("==================================================================================")
    console.log("==================================================================================")
    console.log("")
    console.log("")

    console.log("The time is " + currentTime + "So far you've caught: ")

    console.log(arrCaught.length + " fish, " + arrWeightSum + "lbs, $" + arrValueSum) //.length used as filler. Can this line be hard coded so that the updated count can. Should I use recursion for sums of weight and value? 

    let fishName = arrColor[Math.floor(Math.random() * arrColor.length)] + " " + arrDescription[Math.floor(Math.random() * arrDescription.length)] + " " + arrType[Math.floor(Math.random() * arrType.length)] // Type of fish

    let fishWeight = arrWeight[Math.floor(Math.random() * arrWeight.length)] //Fish weight randomly selected from array of stored weights

    let fishWeightLog = "weight: " + fishWeight + " lbs " // Stored variable to log out weight with formatting

    let fishValue = arrValue[Math.floor(Math.random() * arrValue.length)] // Stored variable to log out value

    let fishValueLog ="value: $" + fishValue // Stored variable to log out value

    caught = fishName + " " + fishWeightLog + " " + fishValueLog //  This can be stored in caught array
    // Running Weight Sum
    arrWeightSum += Number(fishWeight)
   // console.log(arrWeightSum)
    //console.log(typeof arrayWeightSum)
    // Running Value Sum
    arrValueSum += Number(fishValue)
    //console.log(arrValueSum)

    // The current fish that you can catch or release
    console.log('On the hook now is: ' + caught);


    console.log("")
    console.log("")
    // Above this line should be what loops everytime.

    // The user input controls
    if (userInput === "c") {
        console.log("Caught")
        // console.log(arrCaught)
        arrCaught.push(caught)
    } else if (userInput === "r") {
        console.log("Released")
    }

    if (arrWeightSum >= 10) {
        i = 99999999;
    }





















}
console.log(arrCaught)
console.log(arrWeightSum)
console.log(arrValueSum)


const chalk = require('chalk');
const prompt = require('prompt-sync')({ sigint: true });
console.log('   GGGGGGG   OOOOOOOO   NN    NN   EEEEEEE')
console.log('   GG        OO    OO   NNN   NN   EE')
console.log('   GG        OO    OO   NN NN NN   EEEEEE')
console.log('   GG   GG   OO    OO   NN   NNN   EE')
console.log('   GGGGGGG   OOOOOOOO   NN    NN   EEEEEEE')
console.log("")
console.log("")
console.log("                     ___            __________")
console.log("                    /   \          /          \ ")
console.log("                 __/_/_/_\________/ / / /  /   \ ")
console.log("          ,,----'                 ------  / /   \           _")
console.log("        ,/   ) ) ) ) ) ) ) ) ) ) ) ) ) ) )\/ /  /        ,/' \ ")
console.log("    ./''  ,\  ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )\ /       /'  /  \ ")
console.log(" ./''  O , ,\) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )------' / / / / ")
console.log(" (____ , , , ,|) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )----- /")
console.log(" \.  \ , , , | ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ----- \ " )
console.log("   `\.   ___/ ) )_______  ) ) ) ) ) ) ) ) ) ) ) ------. \ \ \ \ " )
console.log("      ``\..) ) ) )______\) ) ) ) ) ) ) ) ) ) /         \.  \  /")
console.log("           `\..    _____/ ) ) ) ) ) ) ) ) /--__          `\._/")
console.log("               ``\________________------'''\   \ ")
console.log("                   \ \ \/           \  \  \ \  /")
console.log("                    \__/             \________/  Thanks Carl Pilcher")

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

let clearSplash = prompt(chalk.underline.yellow("           Press any BUTTON to CONTINUE"))
console.log("")
console.log("")
console.log("==================================================================================")
console.log("==================================================================================")
console.log("")
console.log("")
console.log("You've gone fishing! Try to maximize the value of your caught fish.")
console.log("")
console.log("")
console.log("You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.")
console.log("")
console.log("")
console.log(chalk.bgRed("Items in red have parameters to stop the game. If you run out of time or exceed 10 pounds the game will end."))
console.log("")
console.log(chalk.bgYellow.black("Items in yellow must be acted on. Either caught or released."))
console.log("")
console.log(chalk.bgGreen.black("Items in green are items that have been marked caught."))
console.log("==================================================================================")
console.log("==================================================================================")
console.log("")
console.log("")
console.log(chalk.bgRed.bold.underline("The time is 6:00am. So far you've caught:")) // Hard coded the first time position.
console.log("")


// All arrays
// Possible Comibnations
let arrColor = ["Red ", "Blue ", "Green ", "Yellow ", "Purple ", "Orange ", "Black ", "White ", "Gold ", "Silver "]
let arrDescription = ["Slimy ", "Stinky ", "Scaly ", "Spikey ", "Sandy ", "Thrashing ", "Tooth ", "Butterfly ", "Tipped ", "Capped "]
let arrType = ["Bass ", "Shark ", "Whale ", "Tuna ", "Mahi ", "Dolphin ", "Eel ", "Octopus ", "Crab ", "Lobster ", "Grouper "]
let arrWeight = ["1", "2", "3", "4", "5 ", "6"]
let arrValue = ["3.90", "1.10", "5.00", "2.50", "1.50", "9.00", "5.75", "27.00", "100.00", "82.00", "17.00", "14.75" , "15.00"]
// Time
let arrTime = ["7:00am. ", "8:00am. ", "9:00am. ", "10:00am. ", "11:00am. ", "12:00pm."]
//Fish that were marked [c]aught
let arrCaught = []
//VARIABLES stored outside the loop
let arrWeightSum = 0;              // Sum of weight of all caught fish. Started as an array but then simplified the solution to a variable.
let arrValueSum = 0;               // Sum of value ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let currentTime = "";              // Stores the current time from the loop.
let caught = ""                    // Each individual fish to be put into array and displayed in each turn.

//Loop start
for (let i = 0; i < arrTime.length; i++) {

    let fishWeight = arrWeight[Math.floor(Math.random() * arrWeight.length)] //Fish weight randomly selected from array of stored weights.
    let fishValue = arrValue[Math.floor(Math.random() * arrValue.length)] // Fish value randomly selected from array of stored values.
    let fishName = arrColor[Math.floor(Math.random() * arrColor.length)] + " "
        + arrDescription[Math.floor(Math.random() * arrDescription.length)] + " " +
        arrType[Math.floor(Math.random() * arrType.length)] // Random fish created from arrColor, arrDescription, and arrType

    console.log(chalk.green(arrCaught.length) + " fish, " + chalk.red(arrWeightSum) + " lbs, $" + chalk.green(arrValueSum))


    let fishWeightLog = "[weight: " + fishWeight + " lbs] "  // Stored variable to log out weight with formatting
    let fishValueLog = "[value: $" + fishValue + "]"// Stored variable to log out value
    caught = fishName + " " +fishWeightLog + " " + fishValueLog //  Temporary reassignment of the caught fish to the variable.


    // The current fish that you can catch or release
    console.log("")
    console.log('On the hook now is a ' + chalk.bgYellow.black.bold(caught));
    console.log("")
    // User action to select catch or release.
    let userInput = prompt(chalk.bold("Your action: [c]atch or [r]elease? "))


    if (userInput !== "c" && userInput !== "r") { // if the input is not valid

        currentTime = arrTime[i - 1]              // Stay on the current time? Doesn't work unfortuntately. The displayed time pauses but on the next
        //iteration of the loop it reverts to the time that would correspond with a valid input.
        console.log("")
        console.log("Invalid input. Try again. ")
   
        //console.log("Your action: [c]atch or [r]elease? ")

    } else { currentTime = arrTime[i]; } // if the input is correct continue on with the loop



    // The user input controls
    if (userInput === "c") {
        console.log("")
        console.log("You caught a " +chalk.bgGreen.black.bold (caught))
        // Running Weight Sum
        arrWeightSum += Number(fishWeight) // Updating and adding the sum of the weight with the randomly generated number

        // Running Value Sum
        arrValueSum += Number(fishValue) // Value ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        arrCaught.push(caught)
    } else if (userInput === "r") {
        console.log("")
        console.log(chalk.yellow("Released"))

    }

   

    console.log("")
    console.log("")
    console.log("==================================================================================")
    console.log("==================================================================================")
    console.log("")
    console.log("")

 if (arrWeightSum >= 10) { //if the weight exceeds 10 we trip the for loop by setting i to a number outside of the loop paramaters
        i = 99999999;
        console.log(chalk.red("*** You've reached your weight limit! ***"))
        console.log("")
    }

    if (currentTime === "12:00pm."){ // Loop kick condition if time reaches 12
        console.log(chalk.red("*** You ran out of time!!! ***"))
        console.log("")
    }

    console.log(chalk.bgRed.bold.underline("The time is " + currentTime + "So far you've caught: ")) // loop repeats with time pulled from array
    console.log("")

}
console.log("You caught " + chalk.green.bold(arrCaught.length) + " fish:")
console.log("")
console.log(arrCaught)
console.log("")
console.log("Total Weight:"+ chalk.green("[" + arrWeightSum + " lbs]"))
console.log("")
console.log("Total Value:"+ chalk.green("[$" + arrValueSum.toFixed(2) + "]"))
console.log("")
console.log("")
console.log("==================================================================================")
console.log("==================================================================================")
console.log("")
console.log("")

// MY CHALLENGES ON THIS PROJECT
// 1. Overthinking it: I tried creating multiple nested loops that were not neccessary
// 2. Brain dumping all of the code I needed without considering the order that it needed to flow in first
// 3. Trying to figure out how to keep the time the same if the input was invalid. Was not successful
// 4. Overlooking the requirement not to exceed 10 pounds. My program allows the user to exceed the weight but then terminates
// 5. Complicating the flow with creative input before establishing the proper order
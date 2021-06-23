const prompt = require('prompt-sync')({ sigint: true });
console.log('   GGGGGGG   OOOOOOOO   NN    NN   EEEEEEE')
console.log('   GG        OO    OO   NNN   NN   EE')
console.log('   GG        OO    OO   NN NN NN   EEEEEE')
console.log('   GG   GG   OO    OO   NN   NNN   EE'  )
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
console.log("============================================================================")
console.log("============================================================================")
console.log("")
console.log("")

let  clearSplash =prompt("Press [ENTER] to CONTINUE.")
console.log("")
console.log("")
console.log("============================================================================")
console.log("============================================================================")
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
console.log("============================================================================")
console.log("============================================================================")
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

let arrColor = ["red ", "blue ", "green ", "yellow ", "purple ", "orange ", ]
let arrDescription = ["slimy ", "stinky ", "scaly", "spikey ", "sandy "]
let arrType = ["bass ", "shark ", "whale ", "tuna " , "mahi "]
let arrWeight = ["3.12", ""]
let arrValue = []
let arrTime = ["6:00am. ", "7:00am. ", "8:00am. ", "9:00am. ", "10:00am. ", "11:00am. ", "12:00pm. "]
let arrCaught = []

while(true){
    let currentTime = "";
    for(let i = 0; i < arrTime.length; i++){
        currentTime = arrTime[i];
     console.log("The time is " + currentTime +"So far you've caught: " )
     console.log(arrCaught.length + " fish, " + arrWeight.length + "lbs, $" + arrValue.length )

    } return false

    







}
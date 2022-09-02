var defaultColors = ["red", "green", "blue"]
var userDefinedCOlors = ['yellow', 'black']

var mergedColors = [...defaultColors, ...userDefinedCOlors]

console.log('merged colors :', mergedColors);




function printColors(first, second, third, ...others) {
    console.log("first : " + first + " Second : " + second + " Third : " + third + "Others : " + others);
}


printColors('yellow', "green", "blue", "red", "black", "brown");
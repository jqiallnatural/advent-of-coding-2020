// Specifically, they need you to find the two entries that sum to 2020
// and then multiply those two numbers together.

const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString('utf-8');
const textByLine = text.split("\n")

const numebrsByLine = textByLine.map((text)=>Number(text))

const Multiple2020 = (input) => {
  let map = new Map()
  let totalValue = 2020
  for (i=0; i<input.length; i++){
    let currentValue = input[i]
    let valueTwo = totalValue - currentValue
    if (map.has(currentValue)){
      return currentValue * valueTwo
    } else {map.set(valueTwo)}
  }
}

console.log(Multiple2020(numebrsByLine))
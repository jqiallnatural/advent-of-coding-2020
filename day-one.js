// Specifically, they need you to find the two entries that sum to 2020
// and then multiply those two numbers together.


// Part 1
const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString('utf-8');
const textByLine = text.split("\n")

// Convert array of strings to numbers
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

// Part 2
const sortedData = numebrsByLine.sort((a, b) => a - b)
const ThreeSum = (input) => {
  let finaValue = 0
  for (i = 0; i < input.length; i++){
    let left = i + 1
    let right = input.length - 1
    while (left < right){
      let sumValue = input[i] + input[right] + input[left]
      finaValue = input[i] * input[right] * input[left]
      if (sumValue === 2020) {return finaValue }
      else if ( sumValue > 2020) {
        right -=1
      } else {
        left +=1
      }
    }
  }
  return finaValue
}

console.log('final value', ThreeSum(sortedData))
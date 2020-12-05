// Part 1
const fs = require("fs");
const text = fs.readFileSync("./data-day-3.txt").toString('utf-8');
const textByLine = text.split("\n")
const splitString = textByLine.map((row) => row.split(''));

const sortData = (splitString) => {
  let totalHash = 0
  let down = 0
  let right = 0
  for(down = 0; down < splitString.length; down++){
    let subArr = splitString[down]
    let theHash = subArr[right % subArr.length]
    if (theHash === '#') {
      totalHash ++
    }
    right += 3
  }
  return totalHash
}
console.log(sortData(splitString))

// Part 2
const multiplyDays = (splitString, newRight, newDown) => {
  let totalHash = 0
  let down = 0
  let right = 0
  for(down = 0; down < splitString.length; down += newDown){
    let subArr = splitString[down]
    let theHash = subArr[right % subArr.length]
    if (theHash === '#') {
      totalHash ++
    }
    right = right + newRight
  }
  return totalHash
}

console.log(multiplyDays(splitString, 1, 1) * multiplyDays(splitString, 3, 1) * multiplyDays(splitString, 5, 1) * multiplyDays(splitString, 7, 1) * multiplyDays(splitString, 1, 2))

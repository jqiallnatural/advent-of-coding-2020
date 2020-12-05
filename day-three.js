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

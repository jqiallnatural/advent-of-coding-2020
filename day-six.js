const fs = require("fs");
const text = fs.readFileSync("./data-day-6.txt").toString('utf-8');
const textArr = text.split("\n\n")

// Part 1 parse
const stringArr = textArr
  .map((string)=>string.split('\n').join(''))
  .map((str) => str.split(''))

// Part 2 parse
const partTwoArr = textArr
  .map((string)=>string.split('\n'))


// Part 1 get total group yes
const getGroupYes = (strData) => {
  let count = 0
  let map = new Map()
  for (j=0; j<strData.length; j++){
    if (!(map.has(strData[j]))){
      map.set(strData[j])
      count ++
    }
  }
  return count
}

const totalGroupYes = (stringArr) => {
  let total = 0
  for ( i = 0; i < stringArr.length; i++){
    total = total + getGroupYes(stringArr[i])
  }
  return total
}

console.log(totalGroupYes(stringArr)) 

console.log(getEveryOneYes(mockData))
const fs = require("fs");
const text = fs.readFileSync("./data-day-5.txt").toString('utf-8');
const textArr = text.split("\n")

// Function to get the row and col number
const getSeatNumber = (data, lowerHalf, upperHalf) => {
  for (j=0; j < data.length; j++){
    if(data[j] === 'B' || data[j] === 'R'){
      lowerHalf = lowerHalf + Math.ceil((upperHalf - lowerHalf) / 2)
    } else {
      upperHalf = lowerHalf + Math.floor((upperHalf - lowerHalf) / 2)
    }
  }
  // Return the last letter
  if (data[data.length - 1] === 'F') { 
    return lowerHalf } else {
      return upperHalf
    }
};

// Function to get the seating ID
const getSeating = (textArr) => {
  let rowLowerHalf = 0
  let rowUpperHalf = 127
  let colLowerHalf = 0
  let colUpperHalf = 7
  let maxSeatId = 0
  let allId = []
  for ( i = 0; i < textArr.length; i++) {
    const rowsData = textArr[i].split('', 7)
    const columnsData = textArr[i].slice(textArr[i].length-3).split('')
    const rowNumber = getSeatNumber(rowsData, rowLowerHalf, rowUpperHalf)
    const colNumber = getSeatNumber(columnsData, colLowerHalf, colUpperHalf)
    const seatId = rowNumber * 8 + colNumber
    allId.push(seatId)
    // Part 1 just return maxSeatId
    maxSeatId = Math.max(maxSeatId, seatId)
  }

  allId.sort((a,b) => a - b)

  return allId
}

const allSeatId = getSeating(textArr)

//Part 2
const myPass = (allSeatId) => {
  for ( i = 0; i < allSeatId.length - 1; i++){
    if (allSeatId[i+1] !== allSeatId[i] + 1 )
    return allSeatId[i] + 1
  }
}

console.log(myPass(allSeatId))
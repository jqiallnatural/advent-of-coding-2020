// Part 1
const fs = require("fs");
const text = fs.readFileSync("./data-day-2.txt").toString('utf-8');
const textByLine = text.split("\n")

const regexString = (data) => {
  const re = /(\d+)-(\d+) ([a-z]{1}): ([a-z]*)/;
  const matchedData = data.match(re);
  const leftInt = parseInt(matchedData[1]);
  const rightInt = parseInt(matchedData[2]);
  const charString = matchedData[3];
  const restOfTheString = matchedData[4];
  return [leftInt, rightInt, charString, restOfTheString];
}

const validatePasswordPart1 = (data) => {
  const [min, max, charStr, theRest] = regexString(data);
  let counter = 0;
  let i;
  for (i = 0; i < theRest.length; i += 1) {
    if (theRest[i] === charStr) {
      counter += 1;
      // No point in continuing if counter is out of bounds
      if (counter > max) {
        return false;
      }
    }
  }
  return (counter >= min);
}

const solveDay02Part1 = (a) => {
  let validPasswords = 0;
  a.map(dataString => {
    if (validatePasswordPart1(dataString)) {
      validPasswords += 1;
    }
    return null;
  })
  return validPasswords;
};

const validatePasswordPart2 = (data) => {
  const [leftVal, rightVal, charStr, theRest] = regexString(data);
  // JS have no logical XOR...
  const firstBool = (theRest[(leftVal - 1)] === charStr);
  const secondBool = (theRest[(rightVal - 1)] === charStr);
  // Gotta love circuit diagrams: (A && NOT B) or (NOT A && B)
  return ((firstBool && !secondBool) || (!firstBool && secondBool));
}

const solveDay02Part2 = (a) => {
  let validPasswords = 0;
  a.map(dataString => {
    if (validatePasswordPart2(dataString)) {
      validPasswords += 1;
    }
    return null;
  })
  return validPasswords;
};

console.log(solveDay02Part2(textByLine))
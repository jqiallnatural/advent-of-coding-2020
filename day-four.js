const fs = require("fs");
const text = fs.readFileSync("./data-day-4.txt").toString('utf-8');
const textByLine = text.split("\n\n").map((arr) => arr.split(' '))
const sortedArr = textByLine.map((arr) => arr
  .map((subArr) => subArr.split('\n'))
  .reduce((acc, curr) => [...acc, ...curr], [])
  .map((arr) => arr.split(':'))
  )

const arrObjects = sortedArr.map((arr) => Object.fromEntries(arr))

const arrObjectsFiltered = arrObjects.filter((passport) => {
  const {  byr, iyr, eyr, hgt, hcl, ecl, pid, } = passport
  // Hair color
  const regexPid = /^\d{9}$/;
  const regexHairColor = /#[0-9a-f]{6}$/;
  const regexHeight = /^(1[5-8][0-9]cm|19[0-3]cm|59in|6[0-9]in|7[0-6]in)/;

  const validByr = byr && Number(byr) >= 1920 && Number(byr) <=2002
  const validIry = iyr && Number(iyr) >= 2010 && Number(iyr) <=2020
  const validEyr = eyr && Number(eyr) >= 2020 && Number(eyr) <=2030
  const validEcl = ecl && (ecl === 'amb' || ecl === 'blu' || ecl === 'brn' || ecl === 'gry' || ecl === 'grn' || ecl === 'hzl' || ecl === 'oth')
  const validHgt = hgt && hgt.match(regexHeight)
  const validHcl = hcl && hcl.match(regexHairColor)
  const validPid = pid && pid.match(regexPid)
    if (Object.keys(passport).length > 6 && (validByr && validIry && validEyr && validEcl && validHgt && validHcl && validPid) )
        return true;
    return false
  }
)

console.log(arrObjectsFiltered.length)
const fs = require('fs');

const CALIBRATION_VALUES = 'C:/Checkout-SVN/TestValery-HEAD/adventofcode/js/2023-1/calibration-values.txt';
const FIRST_DIGIT_REGEXP = /\d/;

const allFileContents = fs.readFileSync(CALIBRATION_VALUES, 'utf-8');
var total = 0;
allFileContents.split(/\r?\n/).forEach(line =>  {
   const firstDigit = line.match(FIRST_DIGIT_REGEXP);
   const lastDigit = line.split("").reverse().join("").match(FIRST_DIGIT_REGEXP);
   const value = parseInt(`${firstDigit}${lastDigit}`);
   console.log(`Line from file: ${line} ${firstDigit} ${lastDigit} => ${value}`);
   total += value;
});

console.log(`Result => ${total}`);

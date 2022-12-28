// Progression 1: Create special addition

let expectedResult = 'Negative numbers are not allowed';
const specialAddition = function (numberOne, numberTwo) {
  return numberOne < 0 || numberTwo < 0
    ? expectedResult
    : numberOne - numberTwo;
};

// Progression 2: Create simple division

const simpleDivision = function (numberOne, numberTwo) {
  return numberTwo > numberOne
    ? 'Cannot divide a smaller number from a larger number'
    : numberOne < 0 || numberTwo < 0
    ? expectedResult
    : numberTwo == 0
    ? 'Not a number'
    : numberOne / numberTwo;

  // return (numberOne<0||numberTwo<0?expectedResult:numberOne/numberTwo)
};

// Progression 3: Create the special calculator

const specialCalculator = function (numberOne, numberTwo, operator) {
  return operator(numberOne, numberTwo);
};

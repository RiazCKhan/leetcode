const romanToInt = (string) => {

  const stringArr = string.split('');

  let romanNumI = 0;
  let romanNumV = 0;
  let romanNumX = 0;
  let romanNumL = 0;
  let romanNumC = 0;
  let romanNumD = 0;
  let romanNumM = 0;

  let result = 0;

  for (const letter of stringArr) {

    if (letter === "I") {
      romanNumI += 1
    }
    if (letter === "V") {
      romanNumV += 5
    }
    if (letter === "X") {
      romanNumX += 10
    }
    if (letter === "L") {
      romanNumL += 50
    }
    if (letter === "C") {
      romanNumC += 100
    }
    if (letter === "D") {
      romanNumD += 500
    }
    if (letter === "M") {
      romanNumM += 1000
    }

  }

result = romanNumI + romanNumV + romanNumX + romanNumL + romanNumC + romanNumD + romanNumM
console.log(result)


};

const s = "LVIII";

romanToInt(s);

/*

Input = "String"

1. Split String into Arr
2. Loop throug Arr

Output = "Number"

*/

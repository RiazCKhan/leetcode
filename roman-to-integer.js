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


  for (let i = 0; i <= stringArr.length; i++) {

    // EDGE IF V after I
    if (stringArr[i] === "I" && stringArr[i + 1] === "V" || stringArr[i + 1] === "X") {
      romanNumI += 0
    } else if (stringArr[i] === "I") {
      romanNumI += 1
    }

    // EDGE IF "I" before "V" THEN "V" = 4
    if (stringArr[i] === "V" && stringArr[i - 1] === "I") {
      romanNumV += 4
    } else if (stringArr[i] === "V") {
      romanNumV += 5
    }

    if (stringArr[i] === "X" && stringArr[i - 1] === "I") {
      romanNumX += 9
    } else if (stringArr[i] === "X") {
      romanNumX += 10
    }

    if (stringArr[i] === "L") {
      romanNumL += 50
    }

    if (stringArr[i] === "C") {
      romanNumC += 100
    }

    if (stringArr[i] === "D") {
      romanNumD += 500
    }

    if (stringArr[i] === "M") {
      romanNumM += 1000
    }

  }

  console.log("I", romanNumI)
  console.log("V", romanNumV)
  console.log("X", romanNumX)
  console.log("L", romanNumL)
  console.log("C", romanNumC)
  console.log("D", romanNumD)
  console.log("M", romanNumM)


  result = romanNumI + romanNumV + romanNumX + romanNumL + romanNumC + romanNumD + romanNumM
  console.log(result)


};

const s = "IX";
const x = "MCMXCI"
romanToInt(s);

/*

Input = "String"

Edge Cases
IF I before V = 4
IF I before X = 9

IF X before L = 40
IF X before C = 90

IF C before D = 400
IF C before M = 900

Output = "Number"

*/

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

    // EDGE IF "I" before "V"
    if (stringArr[i] === "I" && stringArr[i + 1] === "V" || stringArr[i + 1] === "X") {
      romanNumI += 0;
    } else if (stringArr[i] === "I") {
      romanNumI += 1;
    }

    // EDGE IF "I" before "V" THEN "V" = 4
    if (stringArr[i] === "V" && stringArr[i - 1] === "I") {
      romanNumV += 4;
    } else if (stringArr[i] === "V") {
      romanNumV += 5;
    }

    // EDGE IF "X" before "L" OR "C"
    // EDGE ELSE IF "I" before "X" THEN "X" = 9
    if (stringArr[i] === "X" && stringArr[i + 1] === "L" || stringArr[i + 1] === "C") {
      romanNumX += 0;
    } else if (stringArr[i] === "X" && stringArr[i - 1] === "I") {
      romanNumX += 9;
    } else if (stringArr[i] === "X") {
      romanNumX += 10;
    }

    // EDGE IF "X" before "L" THEN L = 40
    if (stringArr[i] === "L" && stringArr[i - 1] === "X") {
      romanNumL += 40;
    } else if (stringArr[i] === "L") {
      romanNumL += 50;
    }

    // EDGE IF "C" before "D" OR "M"
    // EDGE ELSE IF "X" before C THEN C = 90
    if (stringArr[i] === "C" && stringArr[i + 1] === "D" || stringArr[i + 1] === "M") {
      romanNumC += 0;
    } else if (stringArr[i] === "C" && stringArr[i - 1] === "X") {
      romanNumC += 90;
    } else if (stringArr[i] === "C") {
      romanNumC += 100;
    }

    // EDGE IF "C" before "D" THEN D = 400
    if (stringArr[i] === "D" && stringArr[i - 1] === "C") {
      romanNumD += 400;
    } else if (stringArr[i] === "D") {
      romanNumD += 500;
    }

    // EDGE IF "C" before "M" THEN M = 900
    if (stringArr[i] === "M" && stringArr[i - 1] === "C") {
      romanNumM += 900;
    } else if (stringArr[i] === "M") {
      romanNumM += 1000;
    }
  }

  console.log("I", romanNumI);
  console.log("V", romanNumV);
  console.log("X", romanNumX);
  console.log("L", romanNumL);
  console.log("C", romanNumC);
  console.log("D", romanNumD);
  console.log("M", romanNumM);

  result = romanNumI + romanNumV + romanNumX + romanNumL + romanNumC + romanNumD + romanNumM;
  console.log(result);

  return result;
};

const x = "MCMXCIV";

romanToInt(x);

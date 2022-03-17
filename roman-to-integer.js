const romanToInt = (string) => {

  const stringArr = string.split('');

  let romanNumI = 0;
  let romanNumV = 0;
  let romanNumX = 0;
  let romanNumL = 0;
  let romanNumC = 0;
  let romanNumD = 0;
  let romanNumM = 0;

  for (const letter of stringArr) {

    if (letter === "I") {
      romanNumI += 1
    }

  }

  console.log(romanNumI)

};

const s = "III";

romanToInt(s);

/*

Input = "String"

1. Split String into Arr
2. Loop throug Arr

Output = "Number"

*/

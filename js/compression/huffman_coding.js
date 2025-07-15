// haffman coding

const testcase = 'BCAADDDCCCACACAC';

function test(str) {
  // find occurance of the characters
  const charOccuranceMap = {};

  for (let i = 0; i < str.length; i++) {
    if (charOccuranceMap[str[i]]) {
      charOccuranceMap[str[i]] = charOccuranceMap[str[i]] + 1;
    } else {
      charOccuranceMap[str[i]] = 1;
    }
  }
  console.log(charOccuranceMap);
  let charOccuranceOrderArr = [];
  charOccuranceOrderArr = Object.keys(charOccuranceMap).map((c) => ({ char: c, frequency: charOccuranceMap[c] }));
  charOccuranceOrderArr = charOccuranceOrderArr.sort((a, b) => a.frequency - b.frequency);

  // build binary tree
}

test(testcase);

class Halfmannode {
  constructor() {}
}

class Halfmantree {}

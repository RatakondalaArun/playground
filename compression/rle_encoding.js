/**
 * Run Length based encoding algorithm to compress data based on occurrence of sequence characters
 * AAABBBBCCCCDDD -> A3B4C4D2
 */
function encode(str) {
  if (str.length === 0) return '';

  let stack = [];
  let compressedStr = '';

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    const nextElement = str[i + 1];
    if (element === nextElement) {
      stack.push(element);
    } else {
      stack.push(element);
      compressedStr += element + stack.length;
      stack = [];
    }
  }

  return compressedStr;
}

/**
 * Run Length based algorithm to decode data based on occurrence of sequence characters
 * A3B4C4D2 -> AAABBBBCCCCDDD
 */
function decode(str) {
  let decompressedString = '';
  for (let i = 0; i < str.length; i = i + 2) {
    const element = str[i];
    let elemetRepetation = str[1];
    if (i > 0) {
      elemetRepetation = parseInt(str[i + 1] ?? '0');
    }
    for (let j = 1; j <= elemetRepetation; j++) {
      decompressedString += element;
    }
  }
  return decompressedString;
}

const testStr = 'AAABBBBCCCCDDD';

const compressedString = encode(testStr);
const decompressedString = decode(compressedString);

console.log(`${testStr} -> ${compressedString}`);
console.log(`${compressedString} -> ${decompressedString}`);
console.log(`
Size:
- teststring: ${testStr.length * 2} bytes
- compressed: ${compressedString.length * 2} bytes
- decompressed: ${decompressedString.length * 2} bytes
- % of bytes saved: ${Math.round(((testStr.length * 2 - compressedString.length * 2) / (testStr.length * 2)) * 100)} %
`);

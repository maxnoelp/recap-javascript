function zipStrings(strA, strB) {
  let result = "";
  let maxLength = Math.max(strA.length, strB.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < strA.length) {
      result += strA[i];
    }
    if (i < strB.length) {
      result += strB[i];
    }
  }
  return result;
}
